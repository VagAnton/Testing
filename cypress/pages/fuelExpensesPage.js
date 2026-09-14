class FuelExpensesPage {
    elements = {
        dateInput: () => cy.get('#addExpenseDate'),
        mileageInput: () => cy.get('#addExpenseMileage'),
        litersInput: () => cy.get('#addExpenseLiters'),
        totalCostInput: () => cy.get('#addExpenseTotalCost'),
        addButton: () => cy.get('.modal-footer button.btn-primary'),
        expensesTable: () => cy.get('.expenses_table'),
    };

    enterDate(date) {
        this.elements.dateInput().clear().type(date);
    }

    enterMileage(mileage) {
        this.elements.mileageInput().clear().type(mileage);
    }

    enterLiters(liters) {
        this.elements.litersInput().clear().type(liters);
    }

    enterTotalCost(totalCost) {
        this.elements.totalCostInput().clear().type(totalCost);
    }

    clickAdd() {
        this.elements.addButton().click();
    }

    addExpense(mileage, liters, totalCost) {
        this.enterMileage(mileage);
        this.enterLiters(liters);
        this.enterTotalCost(totalCost);
        this.clickAdd();
    }

    getExpenseRowByMileage(mileage) {
        return cy.contains('.expenses_table tbody tr', mileage);
    }

    getExpenseTotalCostByMileage(mileage) {
        return this.getExpenseRowByMileage(mileage).find('td').eq(3);
    }
}

export default FuelExpensesPage;