class ActionsManager {
    constructor() {
        this.amount = 0;
        this.newAction = this.loadFromLocal() || [];
        this.balance = 0;
        this.savedAmount = 0;
        this.calcBalance(); // Calculate balance after loading from local storage
    }

    addAction(action) {
        this.newAction.push(action);
        this.saveToLocal();
        this.calcBalance();
    }

    deleteAction(id) {
        this.newAction = this.newAction.filter(action => action.id !== id);
        this.calcBalance();
        this.saveToLocal();
    }

    updateAction(id, newAmount) {
        let indexToUpdate = this.newAction.findIndex(
            action => action.id === id
        );
        if (indexToUpdate !== -1) {
            this.newAction[indexToUpdate].amount = newAmount;
            this.calcBalance();
            this.saveToLocal();
        }
    }

    calcBalance() {
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.totalSavings = [];
        this.allTheSavingsAmount = 0;
        this.savedAmount = 0;

        for (let action of this.newAction) {
            if (action.type === "Income") {
                this.totalIncome += action.amount;
            } else if (action.type === "Expense") {
                this.totalExpense += action.amount;
            } else {
                let saved = (this.savedAmount = action.amount);
                this.totalSavings.push(saved);
                this.allTheSavingsAmount += action.amount;
                this.saveToLocal();
            }
        }

        let arr = 0;
        for (let i = 0; i < this.totalSavings.length; i++) {
            arr += this.totalSavings[i];
        }
        this.balance = this.totalIncome - this.totalExpense - arr;

        this.saveToLocal();

        return this.balance;
    }

    // Save actions to local storage

    saveToLocal() {
        localStorage.setItem("actions", JSON.stringify(this.newAction));
    }

    // load actions from local storage

    loadFromLocal() {
        let storedActions = localStorage.getItem("actions");
        return storedActions ? JSON.parse(storedActions) : [];
    }

    reset() {
        localStorage.setItem("actions", JSON.stringify((this.newAction = [])));
        this.calcBalance();
        this.loadFromLocal();
    }
}

export default ActionsManager;
