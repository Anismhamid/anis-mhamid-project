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
            alert('שגיאה, אתה לא יכול להיות בחובות')
            return null
        }
    } else if (description == '' && amount == '') {
        alert('שגיאה, אנא מלא את השדות')
    } else if (description != '' || description == '' && amount == '') {
        alert("שגיאה, לא ניתן להגדיר את הכמות לריק")
    } else if (description == '' && amount != '') {
        alert("שגיאה, אינך יכול להגדיר את התיאור לריק")
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

    let balanceColor = manager.balance > 0 ? 'green' : 'red';

    document.getElementById("container").innerHTML = `
    <div class="row mb-4">
            <h1 class="text-center display-1 text-primary">החשבון <i class="text-success fa-solid fa-chart-pie"></i> שלי</h1>
        </div>

        <div class="row mb-4">
            <div class="col-12 card card-custom p-4 ">
            <div class="alert alert-secondary display-6 text-center" style="color: ${balanceColor};">יתרה<h1 class="text-center"> <hr> ${manager.balance} <i class=" fa-solid fs-6 fa-shekel-sign"></i></h1>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-4 card card-custom p-4 mb-4 bg-white">
                <!-- Form -->
                <form id="action-form">
                    <div class="mb-3">
                        <label for="type" class="form-label">סוג פעולה</label>
                        <select id="type" class="form-select">
                            <option value="Income">הכנסה</option>
                            <option value="Expense">הוצאה</option>
                            <option value="Savings">חיסכון</option>
                        </select>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="description">
                        <label for="description">תיאור</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="date" class="form-control" id="start" name='start' value="${currentDate}">
                        <label for="start">תאריך</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="amount-input" placeholder="Amount">
                        <label for="amount-input">סכום</label>
                    </div>
                    <button class="btn btn-custom w-100" type="button" onclick="addNewAction()">הוספה</button>
                </form>
            </div>
            <div class="col-sm-8">
                <!-- Table -->
                <table class="table table-custom table-striped">
                    <thead  class=" text-center">
                        <tr>
                            <th class="col-4">תיאור</th>
                            <th class="col-2">סכום</th>
                            <th class="col-4">תאריך</th>
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
            <h6 class="section-title text-primary display-6 p-2">תוכנית חיסכון</h6>
            <div class="row mb-4">
                <div class="col-sm-4 card card-custom p-4 bg-light">
                    <h5 class="text-success h1">
                        <span class="text-primary display-6 my-3">סה"כ חיסכון</span>
                        <hr>
                        ${SavingsAmountResult} <i class="fa-solid fs-6 fa-shekel-sign"></i>
                    </h5>
                </div>
                <div class="col-sm-8">
                    <table class="table table-custom table-striped mt-4">
                        <thead class=" text-center">
                            <tr>
                                <th>תאריך</th>
                                <th>סכום שנחסך</th>
                            </tr>
                        </thead>
                        <tbody id="saved-amount-table"></tbody>
                    </table>
                </div>
            </div>
        </div>
`;
    showSaveAmount()
}
showActions();

window.deleteAction = function deleteAction(id) {
    if (confirm("האם אתה בטוח שאתה רוצה למחוק את הפעולה הזו?")) {
        try {
            manager.deleteAction(id);
        } catch (error) {
            alert("אירעה שגיאה בעת מחיקת הפעולה:", error, id);
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
    let totalSavings = manager.totalSavings || 'אין נתונים'
    let savedTbody = document.getElementById("saved-amount-table");

    savedTbody.innerHTML = '';

    for (let action = 0; action < totalSavings.length; action++) {

        savedTbody.innerHTML += `
            <td class="text-primary fw-bold">${formatDate(new Date())}</td>
            <td class="text-primary text-center fw-bold">${totalSavings[action]}</td>
        `;

    }
}
