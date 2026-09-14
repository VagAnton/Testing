class GaragePage {
    elements = {
        addCarButton: () => cy.contains('button', 'Add car'),
        brandSelect: () => cy.get('#addCarBrand'),
        modelSelect: () => cy.get('#addCarModel'),
        mileageInput: () => cy.get('#addCarMileage'),
        addButton: () => cy.get('.modal-footer button.btn-primary'),
        carCard: (carName) => cy.contains('.car', carName),
    };

    clickAddCar() {
        this.elements.addCarButton().click();
    }

    selectBrand(brand) {
        this.elements.brandSelect().select(brand);
    }

    selectModel(model) {
        this.elements.modelSelect().select(model);
    }

    enterMileage(mileage) {
        this.elements.mileageInput().type(mileage);
    }

    clickAdd() {
        this.elements.addButton().click();
    }

    addCar(brand, model, mileage) {
        this.clickAddCar();
        this.selectBrand(brand);
        this.selectModel(model);
        this.enterMileage(mileage);
        this.clickAdd();
    }

    getCarCard(carName) {
        return this.elements.carCard(carName);
    }
    
    clickAddFuelExpense(carName) {
        this.elements.carCard(carName).find('.car_add-expense').click();
    }
}

export default GaragePage;