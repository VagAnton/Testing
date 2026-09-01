describe('Registration form', () => {

  beforeEach(() => {
    cy.visit('/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });

    cy.get('button.header_signin').click();
    cy.contains('button.btn-link', 'Registration').click();
  });
  context('Registration form display', () => {
    it('Registration form is displayed', () => {
      cy.contains('h4', 'Registration').should('be.visible');
      cy.get('#signupName').should('be.visible');
      cy.get('#signupLastName').should('be.visible');
      cy.get('#signupEmail').should('be.visible');
      cy.get('#signupPassword').should('be.visible');
      cy.get('#signupRepeatPassword').should('be.visible');
      cy.contains('button', 'Register').should('be.visible').and('be.disabled');
    });
  });

  context('Name field validation', () => {
    it('shows error when Name is empty', () => {
      cy.get('#signupName').focus().blur();
      cy.contains('Name required').should('be.visible');
      cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Name contains invalid characters', () => {
      cy.get('#signupName').type('Антон').blur();
      cy.contains('Name is invalid').should('be.visible');
      cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Name is shorter than 2 characters', () => {
      cy.get('#signupName').type('A').blur();
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
      cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Name is longer than 20 characters', () => {
      cy.get('#signupName').type('ABCDEFGHIJKLMNOPQRSTU').blur();
      cy.contains('Name has to be from 2 to 20 characters long').should('be.visible');
      cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('accepts valid Name', () => {
      cy.get('#signupName').type('Anton').blur();
      cy.get('#signupName').should('have.value', 'Anton');
      cy.contains('Name is invalid').should('not.exist');
      cy.contains('Name has to be from 2 to 20 characters long').should('not.exist');
    });

    it('ignores spaces before and after Name', () => {
      cy.get('#signupName').type('   Anton   ').blur();
      cy.get('#signupName').invoke('val').then((value) => {
        expect(value.trim()).to.equal('Anton');
      });
      cy.contains('Name is invalid').should('not.exist');
    });
  });

  context('Last name field validation', () => {
    it('shows error when Last name is empty', () => {
      cy.get('#signupLastName').focus().blur();
      cy.contains('Last name required').should('be.visible');
      cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Last name contains invalid characters', () => {
      cy.get('#signupLastName').type('Веселков').blur();
      cy.contains('Last name is invalid').should('be.visible');
      cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Last name is shorter than 2 characters', () => {
      cy.get('#signupLastName').type('V').blur();
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
      cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Last name is longer than 20 characters', () => {
      cy.get('#signupLastName').type('ABCDEFGHIJKLMNOPQRSTU').blur();
      cy.contains('Last name has to be from 2 to 20 characters long').should('be.visible');
      cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('accepts valid Last name', () => {
      cy.get('#signupLastName').type('Veselkov').blur();
      cy.get('#signupLastName').should('have.value', 'Veselkov');
      cy.contains('Last name is invalid').should('not.exist');
      cy.contains('Last name has to be from 2 to 20 characters long').should('not.exist');
    });

    it('ignores spaces before and after Last name', () => {
      cy.get('#signupLastName').type('   Veselkov   ').blur();
      cy.get('#signupLastName').invoke('val').then((value) => {
        expect(value.trim()).to.equal('Veselkov');
      });
      cy.contains('Last name is invalid').should('not.exist');
      cy.contains('Last name has to be from 2 to 20 characters long').should('not.exist');
    });
  }); 
  
  context('Email field validation', () => {
    it('shows error when Email is empty', () => {
      cy.get('#signupEmail').focus().blur();
      cy.contains('Email required').should('be.visible');
      cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Email has invalid format', () => {
      cy.get('#signupEmail').type('invalid-email').blur();
      cy.contains('Email is incorrect').should('be.visible');
      cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('accepts valid Email', () => {
      cy.get('#signupEmail').type('test@example.com').blur();
      cy.get('#signupEmail').should('have.value', 'test@example.com');
    });
  });

  context('Password field validation', () => {
    it('shows error when Password is empty', () => {
      cy.get('#signupPassword').focus().blur();
      cy.contains('Password required').should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });
    
    it('shows error when Password is shorter than 8 characters', () => {
      cy.get('#signupPassword').type('Pass1').blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Password is longer than 15 characters', () => {
      cy.get('#signupPassword').type('Password12345678').blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Password does not contain a digit', () => {
      cy.get('#signupPassword').type('Password').blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Password does not contain an uppercase letter', () => {
      cy.get('#signupPassword').type('password1').blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when Password does not contain a lowercase letter', () => {
      cy.get('#signupPassword').type('PASSWORD1').blur();
      cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
      .should('be.visible');
      cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('accepts valid Password', () => {
      cy.get('#signupPassword').type('Password1').blur();
      cy.get('#signupPassword').should('have.value', 'Password1');
    });
  });

  context('Re-enter password field validation', () => {
    it('shows error when Re-enter password is empty', () => {
      cy.get('#signupRepeatPassword').focus().blur();
      cy.contains('Re-enter password required').should('be.visible');
      cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('shows error when passwords do not match', () => {
      cy.get('#signupPassword').type('Password1');
      cy.get('#signupRepeatPassword').type('Password2').blur();
      cy.contains('Passwords do not match').should('be.visible');
      cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

    it('accepts matching passwords', () => {
      cy.get('#signupPassword').type('Password1');
      cy.get('#signupRepeatPassword').type('Password1').blur();
      cy.get('#signupRepeatPassword').should('have.value', 'Password1');
    });

  });
  
  context('Successful registration and sign-in', () => {
    it('registers a new user with valid data', () => {
      const email = `anton_${Date.now()}@gmail.com`;
      const password = 'Password1';
      cy.get('#signupName').type('Anton');
      cy.get('#signupLastName').type('Veselkov');
      cy.get('#signupEmail').type(email);
      cy.get('#signupPassword').type(password);
      cy.get('#signupRepeatPassword').type(password);
      
      cy.contains('button', 'Register').should('be.enabled').click();
      cy.url().should('include', '/panel/garage');
      cy.contains('Garage').should('be.visible');

      cy.logout();
      cy.login(email, password);
      cy.url().should('include', '/panel/garage');
      cy.contains('Garage').should('be.visible');
    });
  });

});