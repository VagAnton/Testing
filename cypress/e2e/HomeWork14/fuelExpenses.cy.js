import GaragePage from '../../pages/garagePage';
import FuelExpensesPage from '../../pages/fuelExpensesPage';

describe('Fuel Expenses', () => {
    const garagePage = new GaragePage();
    const fuelExpensesPage = new FuelExpensesPage();

    beforeEach(() => {
        cy.visit('/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });

        cy.env(['email', 'password']).then(({ email, password }) => {
            cy.login(email, password);
        });
    });

    it('should add fuel expense for created car', () => {
        const brand = 'Audi';
        const model = 'TT';
        const carName = `${brand} ${model}`;
        const mileage = '1000';
        const expenseMileage = '1100';
        const liters = '40';
        const totalCost = '60';

        garagePage.addCar(brand, model, mileage);

        garagePage.getCarCard(carName).should('be.visible');

        garagePage.clickAddFuelExpense(carName);

        fuelExpensesPage.addExpense(
            expenseMileage,
            liters,
            totalCost
        );

        fuelExpensesPage
            .getExpenseRowByMileage(expenseMileage)
            .should('be.visible')
            .and('contain', expenseMileage)
            .and('contain', `${liters}L`);

        fuelExpensesPage
            .getExpenseTotalCostByMileage(expenseMileage)
            .invoke('text')
            .should('match', /60(?:\.00)? USD/);
    });
});