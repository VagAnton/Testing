Cypress.Commands.add('login', (email, password) => {
  cy.get('button.header_signin').click();

  cy.get('#signinEmail').type(email);
  cy.get('#signinPassword').type(password);

  cy.contains('button', 'Login').click();
});

Cypress.Commands.add('logout', () => {
    cy.get('#userNavDropdown').click();
    cy.get('.user-nav_menu').contains('button', 'Logout').click();
});