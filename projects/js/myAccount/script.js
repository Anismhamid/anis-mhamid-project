import ActionsManager from "./js/actionManager.js";
import Action from "./js/actions.js";

let manager = new ActionsManager();


window.addNewAction = function addNewAction() {
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;
    let amount = +document.getElementById("amount-input").value || 0;

    let formattedDate = formatDate(new Date());

    if ((description != '' && amount != '')) {
        manager.addAction(new Action(type, description, amount, formattedDate, manager.savedAmount || 0, manager.totalSavings));
        manager.calcBalance();
        if (amount <= 0 || amount > manager.balance) {
            alert('Error, You Cannot be in debt!')
            return null
        }
    } else if (description == '' && amount == '') {
        alert('Error, Please fill the fields')
    } else if (description != '' || description == '' && amount == '') {
        alert("Error, you cannot set amount to Empty")
    } else if (description == '' && amount != '') {
        alert("Error, you cannot set description to Empty")
    }
    showSaveAmount();
    showActions();
    getAll();

}

function formatDate(date) {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function showActions() {
    let SavingsAmountResult = manager.allTheSavingsAmount

    let currentDate = formatDate(new Date());

    let balanceColor = manager.balance >= 0 ? 'green' : 'red';


    document.getElementById("container").innerHTML = `
    <div>
        <h1 class=" sticky-top display-1 text-danger">MY <i class="text-secondary fa-solid fa-chart-pie"></i> ACCOUNT</h1>
        <div class="row">
            <div style = "color: ${balanceColor}";  class=" alert alert-secondary fs-2 fw-bold">Balance: ${manager.balance}</div>
        </div>
        <div class="row">
            <div class="col-sm-4 border p-3 rounded bg-body-secondary">
                <!-- Form -->
                <select id="type" class="form-select">
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                    <option value="Savings">Savings</option>
                </select>
                <div class="form-floating my-3">
                    <input type="text" class="form-control" id="description" placeholder="Description">
                    <label for="description">Description</label>
                </div>
                <div class="form-floating my-3">
                    <input type="date" class="form-control" id="start" name='start' value="${currentDate}">
                    <label for="start">Date</label>
                </div>
                <div class="form-floating my-3">
                    <input type="number" class="form-control" id="amount-input" placeholder="Amount">
                    <label for="amount-input">Amount</label>
                </div>
                <button class="btn btn-primary w-100 my-3" onclick="addNewAction()">Add</button>
            </div>
            <div class="col-sm-8">
                <!-- Table -->
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th class="col-4">Description</th>
                            <th class="col-2">Amount</th>
                            <th class="col-4">Date</th>
                            <th class="col-1"></th>
                            <th class="col-1"></th>
                        </tr>
                    </thead>
                    <tbody id="body"></tbody>
                </table>
            </div>
            </div>
                <hr class="border border-danger border-2 my-5">

            <div class="row">
            <h6 class="text-bg-secondary display-6 p-2">תוכנית חיסכון</h6>
            <div class="row">
                <div class="col-sm-4 border bg-body-secondary">
                    <h5 class="text-success h1"><span class="text-primary display-6  my-3">TotalSavings</span><hr>${SavingsAmountResult}<i class="fa-solid fs-6 fa-shekel-sign"></i></h5>
                </div>
                <div class="col-sm-8">
                
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Date</th>

                                <th>Saved Amount</th>
                            </tr>
                        </thead>
                        <tbody id="saved-amount-table" >

                        </tbody>
                    </table>
                    </div class=" border bg-light w-75">
                </div>
            </div>
        </div>
    </div>
`;
    showSaveAmount()
}
showActions();

window.deleteAction = function deleteAction(id) {
    if (confirm("Are you sure you want to delete this action?")) {
        try {
            manager.deleteAction(id);
        } catch (error) {
            console.error("An error occurred while deleting the action:", error);
            alert("Failed to delete the action");
        }
    }
    showSaveAmount();
    showActions();
    getAll()
}

window.editAction = function editAction(id) {
    let newAmount = Number(prompt("Enter the new amount:"));
    if (isNaN(newAmount)) {
        alert("Invalid amount entered.");
        return;
    }
    try {
        manager.updateAction(id, newAmount);
    } catch (error) {
        console.error("An error occurred while updating the action:", error);
        alert("Failed to update the action");
    }
    showSaveAmount();
    showActions();
    getAll()
}

window.getAll = function getAll() {
    let storedActions = manager.loadFromLocal()

    let tbody = document.getElementById("body");
    tbody.innerHTML = '';


    for (let action of storedActions) {
        let color = action.type === "Income" ? 'green' : 'red';

        tbody.innerHTML += `
        <tr>
            <td class='fw-bold' style="color: ${color};">${action.description}</td>
            <td class='fw-bold' style="color: ${color};">${action.amount} <i class="fa-solid fs-6 fa-shekel-sign"></i></td>
            <td class='fw-bold' style="color: ${color};">${action.date}</td>
            <td>
                <button class='btn shadow btn-light' onclick="deleteAction(${action.id})">
                    <i class="fa-solid fa-trash-can text-danger fs-5"></i>
                </button>
            </td>
            <td>
                <button class='btn btn-light shadow' onclick="editAction(${action.id})">
                    <i class="fa-regular fs-5 fa-pen-to-square text-success"></i>
                </button>
            </td>
            </tr>
        `;
    }
};
getAll()

function showSaveAmount() {
    let totalSavings = manager.totalSavings || 'No Savings'
    let descripttion = manager.description || "No Data"
    let savedTbody = document.getElementById("saved-amount-table");

    savedTbody.innerHTML = '';

    for (let action = 0; action < totalSavings.length; action++) {

        savedTbody.innerHTML += `
            <td class="text-primary fw-bold">${formatDate(new Date())}</td>
            <td class="text-primary fw-bold">${totalSavings[action]}</td>
        `;

    }
}