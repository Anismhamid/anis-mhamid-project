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
        this.totalSavings = [];

        this.savedAmount = 0;  // Reset savedAmount before recalculation

        for (let action of this.newAction) {
            if (action.type === 'Income') {
                totalIncome += action.amount;
            } else if (action.type === 'Expense') {
                totalExpense += action.amount;
            } else if (action.type === 'Savings') {
                this.savedAmount += action.amount
                this.totalSavings.pop()
                this.totalSavings.push(this.savedAmount)
                this.totalSavings.push(action.amount)
            }
        }

        // Calculate total savings
        totalIncome - totalExpense - this.savedAmount;
        this.balance = totalIncome;  // Update the balance
        this.saveToLocal();
        return this.balance
    }



    // calcAmount() {
    //     // this.savedAmount = - action.amount;
    //     {
    //         let savedAmountAccumulator = saveAmount + action.amount || 0;
    //         console.log(savedAmountAccumulator);

    //         this.saveToLocal();
    //         return savedAmountAccumulator
    //     }
    // }

    saveToLocal() {
        // Save both actions and balance to local storage
        localStorage.setItem("actions", JSON.stringify(this.newAction));

    }

    loadFromLocal() {
        let storedActions = localStorage.getItem('actions');
        return storedActions ? JSON.parse(storedActions) : [];
    }
}

export default ActionsManager;
