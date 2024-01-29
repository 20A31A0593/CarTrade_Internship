describe('portfolio', () => {
  it('passes', () => {
    cy.visit("https://parabank.parasoft.com/parabank/services.htm")
    cy.get('#headerPanel > ul.leftmenu > li:nth-child(6) > a').click();
    cy.get('#loginPanel > form > div:nth-child(2) > input').type('username_5')
    cy.get('#loginPanel > form > div:nth-child(4) > input').type('746587964')
    cy.get("#loginPanel > form > div:nth-child(5) > input").click();
   // cy.get("#email").type("surya")
   // cy.get("#password").type("47868764876")
    
  })
})