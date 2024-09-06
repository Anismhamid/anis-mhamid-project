import logging
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import SQLAlchemyError
from datetime import datetime
from flask_cors import CORS
from flasgger import Swagger, swag_from

app = Flask(__name__)
CORS(app)
app.logger.setLevel(logging.ERROR)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost:10017/local'
db = SQLAlchemy(app)
swagger = Swagger(app)

class Workers(db.Model):
    Rowid = db.Column(db.Integer, primary_key=True)
    hours = db.Column(db.String(20))
    taken = db.Column(db.String(100))
    wage = db.Column(db.String(80))
    address = db.Column(db.String(100))
    managername = db.Column(db.String(100))
    compname = db.Column(db.String(100))
    date = db.Column(db.String(50))
    worker_id = db.Column(db.String(11))
    phone = db.Column(db.String(20))
    workername = db.Column(db.String(100))

@app.route('/get', methods=['GET'])
@swag_from({
    'tags': ['Workers'],
    'description': 'Retrieve a list of all workers',
    'responses': {
        '200': {
            'description': 'A list of workers',
            'schema': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'Rowid': {'type': 'integer'},
                        'hours': {'type': 'string'},
                        'taken': {'type': 'string'},
                        'wage': {'type': 'string'},
                        'address': {'type': 'string'},
                        'managername': {'type': 'string'},
                        'compname': {'type': 'string'},
                        'date': {'type': 'string'},
                        'worker_id': {'type': 'string'},
                        'phone': {'type': 'string'},
                        'workername': {'type': 'string'}
                    }
                }
            }
        },
        '500': {
            'description': 'Internal server error'
        }
    }
})
def get_api():
    try:
        workers_list = Workers.query.order_by(Workers.workername).all()
        data = [{
            'Rowid': worker.Rowid,
            'hours': worker.hours,
            'taken': worker.taken,
            'wage': worker.wage,
            'address': worker.address,
            'managername': worker.managername,
            'compname': worker.compname,
            'date': worker.date,
            'worker_id': worker.worker_id,
            'phone': worker.phone,
            'workername': worker.workername,
        } for worker in workers_list]
        return jsonify(data)
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': f'SQLAlchemy error: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/post', methods=['POST'])
@swag_from({
    'tags': ['Workers'],
    'description': 'Add a new worker',
    'parameters': [
        {
            'name': 'worker',
            'in': 'body',
            'description': 'Worker object that needs to be added',
            'schema': {
                'type': 'object',
                'properties': {
                    'workername': {'type': 'string'},
                    'phone': {'type': 'string'},
                    'worker_id': {'type': 'string'},
                    'compname': {'type': 'string'},
                    'managername': {'type': 'string'},
                    'address': {'type': 'string'},
                    'wage': {'type': 'string'},
                    'taken': {'type': 'string'},
                    'hours': {'type': 'string'}
                },
                'required': ['workername', 'phone', 'worker_id', 'compname', 'managername', 'address', 'wage', 'taken', 'hours']
            }
        }
    ],
    'responses': {
        '201': {
            'description': 'Worker added successfully'
        },
        '400': {
            'description': 'Invalid input'
        }
    }
})
def post_api():
    data = request.get_json()
    current_date = datetime.now().strftime('%y-%m-%d')
    workers = Workers(
        workername=data.get('workername', ''),
        phone=data.get('phone', ''),
        worker_id=data.get('worker_id', ''),
        compname=data.get('compname', ''),
        managername=data.get('managername', ''),
        address=data.get('address', ''),
        date=current_date,
        wage=data.get('wage', ''),
        taken=data.get('taken', ''),
        hours=data.get('hours', ''),
    )
    db.session.add(workers)
    db.session.commit()
    return jsonify({'message': 'Data added successfully'}), 201

@app.route('/update', methods=['PUT'])
@swag_from({
    'tags': ['Workers'],
    'description': 'Update a worker',
    'parameters': [
        {
            'name': 'worker',
            'in': 'body',
            'description': 'Worker object with updated information',
            'schema': {
                'type': 'object',
                'properties': {
                    'Rowid': {'type': 'integer'},
                    'hours': {'type': 'string'},
                    'taken': {'type': 'string'},
                    'wage': {'type': 'string'},
                    'address': {'type': 'string'},
                    'managername': {'type': 'string'},
                    'compname': {'type': 'string'},
                    'worker_id': {'type': 'string'},
                    'phone': {'type': 'string'},
                    'workername': {'type': 'string'}
                },
                'required': ['Rowid']
            }
        }
    ],
    'responses': {
        '200': {
            'description': 'Worker updated successfully'
        },
        '404': {
            'description': 'Worker not found'
        },
        '400': {
            'description': 'Invalid input'
        }
    }
})
def update_api():
    try:
        data = request.get_json()
        Row_id = data.get('Rowid')
        worker = Workers.query.filter_by(Rowid=Row_id).first()
        if worker:
            worker.hours = data.get('hours', worker.hours)
            worker.taken = data.get('taken', worker.taken)
            worker.wage = data.get('wage', worker.wage)
            worker.address = data.get('address', worker.address)
            worker.managername = data.get('managername', worker.managername)
            worker.compname = data.get('compname', worker.compname)
            worker.worker_id = data.get('worker_id', worker.worker_id)
            worker.phone = data.get('phone', worker.phone)
            worker.workername = data.get('workername', worker.workername)
            db.session.commit()
            return jsonify({'message': 'Data updated successfully'}), 200
        else:
            return jsonify({'error': 'Worker not found'}), 404
    except SQLAlchemyError as e:
        db.session.rollback()
        return jsonify({'error': f'Database error: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/delete/<int:Rowid>', methods=['DELETE'])
@swag_from({
    'tags': ['Workers'],
    'description': 'Delete a worker',
    'parameters': [
        {
            'name': 'Rowid',
            'in': 'path',
            'type': 'integer',
            'required': True,
            'description': 'ID of the worker to delete'
        }
    ],
    'responses': {
        '200': {
            'description': 'Worker deleted successfully'
        },
        '404': {
            'description': 'Worker not found'
        }
    }
})
def delete_api(Rowid):
    try:
        worker = Workers.query.get(Rowid)
        if worker:
            db.session.delete(worker)
            db.session.commit()
            return jsonify({'message': 'Data deleted successfully'}), 200
        else:
            return jsonify({'error': 'Worker not found'}), 404
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=5000)
