describe('Footer', () => {
  beforeEach(() => {
    cy.visit('/', {
        auth: {
            username: 'guest' ,
            password: 'welcome2qauto' ,
        },
    })
  })
  
  it('Display Facebook link', () => {
        cy.get('a.socials_link[href*="facebook.com"]').should('be.visible')
  })

it('Display Telegram link', () => {
        cy.get('a.socials_link[href*="t.me"]').should('be.visible')
  })

it('Display YouTube link', () => {
        cy.get('a.socials_link[href*="youtube.com"]').should('be.visible')
  })

it('Display Instagram link', () => {
        cy.get('a.socials_link[href*="instagram.com"]').should('be.visible')
  })

it('Display LinkedIn link', () => {
        cy.get('a.socials_link[href*="linkedin.com"]').should('be.visible')
  })

it('Display Hillel website link', () => {
        cy.get('a.contacts_link[href="https://ithillel.ua"]').should('be.visible').and('have.text', 'ithillel.ua')
  })

it('Display Hillel email address', () => {
        cy.get('a.contacts_link[href="mailto:developer@ithillel.ua"]').should('be.visible').and('have.text', 'support@ithillel.ua')
  })
})