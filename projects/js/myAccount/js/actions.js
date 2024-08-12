class Action {
    constructor(type, description, amount, formattedDate, savedAmount, allTheSavingsAmounts) {
        this.type = type;
        this.description = description;
        this.amount = amount;
        this.date = formattedDate;
        this.savedAmount = savedAmount || 0;
        this.id = Math.floor(Math.random() * 1001);
        this.totalSavings
        this.allTheSavingsAmount = allTheSavingsAmounts
    }
}

export default Action;
