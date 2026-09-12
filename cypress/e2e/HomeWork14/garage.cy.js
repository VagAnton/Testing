import GaragePage from '../../pages/garagePage';

describe('Garage', () => {
    const garagePage = new GaragePage();
    
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
    
    it('should add a car', () => {
        const brand = 'Audi';
        const model = 'TT';
        const mileage = '1000';
        garagePage.addCar(brand, model, mileage);
        garagePage.getCarCard(`${brand} ${model}`).should('be.visible');
    });
});