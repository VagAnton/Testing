describe('Header', () => {
  beforeEach(() => {
    cy.visit('/', {
        auth: {
            username: 'guest' ,
            password: 'welcome2qauto' ,
        },
    });
  })

  it('Display Hillel logo', () => {
        cy.get('.header_logo').should('be.visible')
  })

  it('Display "Home" button', () => {
    cy.get('a.header-link.-active').should('be.visible').and('have.text', 'Home')
  })

  it('Display "About" button', () => {
        cy.get('button[appscrollto="aboutSection"]').should('be.visible').and('have.text', 'About')
  })

  it('Display "Contacts" button', () => {
        cy.get('button[appscrollto="contactsSection"]').should('be.visible').and('have.text', 'Contacts')
  })

  it('Display "Guest log in" button', () => {
        cy.get('.header-link.-guest').should('be.visible').and('have.text', 'Guest log in')
  })

  it('Display "Sign In" button', () => {
        cy.get('.header_signin').should('be.visible').and('have.text', 'Sign In')
  })
})