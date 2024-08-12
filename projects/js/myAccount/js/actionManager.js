class ActionsManager {
    constructor() {
        this.amount = 0
        this.newAction = this.loadFromLocal() || [];
        this.balance = 0;
        this.savedAmount = 0;
        this.calcBalance(); // Calculate balance after loading from local storage
    }

    addAction(action) {
        this.newAction.push(action);
        this.calcBalance();
        this.saveToLocal();
    }

    deleteAction(id) {
        this.newAction = this.newAction.filter((action) => action.id !== id);
        this.calcBalance();
        this.saveToLocal();
    }

    updateAction(id, newAmount) {
        let indexToUpdate = this.newAction.findIndex((action) => action.id === id);
        if (indexToUpdate !== -1) {
            this.newAction[indexToUpdate].amount = newAmount;
            this.calcBalance();
            this.saveToLocal();
        }
    }

    calcBalance() {
        let totalIncome = 0;
        let totalExpense = 0;
        this.totalSavings = []; // If you need to keep individual savings entries
        this.allTheSavingsAmount = 0; // To accumulate all savings
        this.savedAmount = 0; // This will now hold the total savings

        for (let action of this.newAction) {
            if (action.type === 'Income') {
                totalIncome += action.amount;
            } else if (action.type === 'Expense') {
                totalExpense += action.amount;
            } else if (action.type === 'Savings') {
                this.savedAmount = action.amount;
                this.totalSavings.push(this.savedAmount);
                // Calculate balance
                this.allTheSavingsAmount += this.savedAmount;
            }
        }
        let arr = 0
        for (let i = 0; i < this.totalSavings.length; i++) {
            arr += this.totalSavings[i]
        }
        this.balance = totalIncome - totalExpense - arr
        // Save to local storage
        this.saveToLocal();

        return this.balance;
    }


    saveToLocal() {
        // Save actions to local storage
        localStorage.setItem("actions", JSON.stringify(this.newAction));

    }

    loadFromLocal() {
        // load actions from local storage
        let storedActions = localStorage.getItem('actions');
        return storedActions ? JSON.parse(storedActions) : [];
    }
}

export default ActionsManager;
