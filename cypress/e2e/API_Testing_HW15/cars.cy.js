import GaragePage from '../../pages/garagePage';

describe('Cars API', () => {
    const garagePage = new GaragePage();

    let createdCarId;

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

    it('should create car and verify it via API', () => {
        const brand = 'Audi';
        const model = 'TT';
        const mileage = '1000';

        cy.intercept('POST', '**/api/cars').as('createCar');

        garagePage.addCar(brand, model, mileage);

        cy.wait('@createCar').then((interception) => {
            expect(interception.response.statusCode).to.eq(201);

            expect(interception.response.body.status).to.eq('ok');

            expect(interception.response.body.data).to.have.property('id');

            createdCarId = interception.response.body.data.id;

            expect(interception.response.body.data.carBrandId).to.eq(1);
            expect(interception.response.body.data.carModelId).to.eq(1);
            expect(interception.response.body.data.initialMileage).to.eq(1000);
            expect(interception.response.body.data.brand).to.eq(brand);
            expect(interception.response.body.data.model).to.eq(model);
        });

        cy.request('GET', '/api/cars').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');

            const createdCar = response.body.data.find(
                (car) => car.id === createdCarId
            );

            expect(createdCar).to.exist;
            expect(createdCar.id).to.eq(createdCarId);
            expect(createdCar.brand).to.eq(brand);
            expect(createdCar.model).to.eq(model);
            expect(createdCar.mileage).to.eq(1000);
        });
    });

    it('should create fuel expense via API for created car', () => {
    const brand = 'Audi';
    const model = 'TT';
    const mileage = '1000';

    const expense = {
        reportedAt: '2026-09-14T00:00:00.000Z',
        mileage: 1100,
        liters: 40,
        totalCost: 60,
    };

    let carId;

    cy.intercept('POST', '**/api/cars').as('createCar');

    garagePage.addCar(brand, model, mileage);

    cy.wait('@createCar').then((interception) => {
        expect(interception.response.statusCode).to.eq(201);
        expect(interception.response.body.status).to.eq('ok');

        carId = interception.response.body.data.id;

        expect(carId).to.exist;

        cy.log(`Created car ID: ${carId}`);
    });

    cy.then(() => {
        cy.log(`Sending expense for car ID: ${carId}`);

        cy.request('POST', '/api/expenses', {
            carId,
            ...expense,
        }).then((response) => {
            cy.log(`Expense response car ID: ${response.body.data.carId}`);

            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');

            expect(response.body.data).to.have.property('id');

            expect(response.body.data.carId).to.eq(carId);
            expect(response.body.data.reportedAt).to.eq(expense.reportedAt);
            expect(response.body.data.mileage).to.eq(expense.mileage);
            expect(response.body.data.liters).to.eq(expense.liters);
            expect(response.body.data.totalCost).to.eq(expense.totalCost);
        });
    });
});
});