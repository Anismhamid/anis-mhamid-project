# Application Image
![WM application image](WM.png)

# Description

This project is a Workers Manager System (WMS) developed to efficiently manage employee data, track salary payments, and facilitate searching and updating records. It consists of multiple windows, each serving different functionalities to streamline the management process effectively.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [File Structure](#file-structure)
- [Publishing](#publishing)
- [Dependencies](#dependencies)
- [Contact Information](#contact-information)
- [Author](#author)


### TreeView Interface

**Fields:**
- Employee Name
- ID Number
- Phone
- Date
- Work Address
- Daily Wage
- Advance Received
- Number of Work Hours

---

## Management Functions

**Deletion:**
1. Delete by RowId
2. Delete by selecting a Row and pressing the Delete key on the keyboard

**Data Update:**
- Clicking on a row fills the fields with data from the Database

---

## Search Functions

- Search by Employee (for each employee individually)
- Search across all employees
- Print search results

---

## Calculation Functions

- Calculate Wage Button (for each employee individually and for all employees)

---

## Printing and Exporting

- Export employee data to Excel and Docx (for each employee individually and for all employees)

---

## Data Analysis Functions

- Button to calculate total number of employees (overall)
- Button to calculate number of workdays (for each employee individually)
- Button to calculate advance received (for each employee individually)
- Button to calculate number of work hours (for each employee individually and for all employees)
- Button to calculate the number of companies the employee works for (for each employee individually and for all employees)


## Application Features

- **Manage workers easily and effectively**
  - *Add, view, update, and delete records*: Users can fully manage employee records, including adding new data, viewing existing details, updating information, and deleting records when needed.
  - *Accurate tracking of payroll data*: Users are able to record employee payroll deductions on a regular basis, including details such as employee name, ID number, date period, and payment date.

- **Use modern technologies and a secure database**
  - *Using MySQL and SQLAlchemy*: Employee data is stored and managed using a MySQL database, with SQLAlchemy being used to facilitate communication with the database and ensure data integrity and ease of querying.

- **API support for interacting with data**
  - *RESTful API*: The application provides API endpoints for interacting with employee data, enabling simple and secure access, updating, and deletion of data over HTTP.
  - *Provide flexibility and integration*: Flexibility in installation and deployment: The application can be deployed on multiple platforms like Windows, macOS, and Linux by compiling it into executable files using tools like PyInstaller or cx_Freeze, which facilitates the usage and deployment process for different users.

- **Modern technology to improve performance**
  - *Using Flask and Python*: The application is built using Flask, a lightweight and flexible Python framework, providing highly efficient performance and easy development and maintenance.

## File Structure

- **main_Screen.py**: Main Python file containing the application's logic.
- **API.py**: Handles database operations.

## Publishing

The application can be published on various platforms such as Windows, macOS, and Linux by packaging it into executable files using tools like PyInstaller or cx_Freeze.

## Dependencies

- Python 3.x
- Tkinter
- customtkinter
- ttkbootstrap
- webbrowser
- requests
- pymysql
- logging
- flask
- flask_sqlalchemy
- sqlalchemy
- datetime
- openpyxl
- docx
- pptx
- reportlab

## Contact Information

For inquiries or support, please contact Anis Mahamid at anesmhamed1@gamil.com

## Author

Developed by Anis Mahamid.
