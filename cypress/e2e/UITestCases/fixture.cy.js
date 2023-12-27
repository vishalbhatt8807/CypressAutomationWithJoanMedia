describe('Fixture Demo', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
        cy.fixture('sauceCredentials.json').as('credentials')
       
    });
    it('Standard User login', () => {
        cy.get('@credentials').then((cred)=>{
        cy.get("#user-name").type(cred.standard_username)
        cy.get("#password").type(cred.system_password)
        cy.get("#login-button").click()
        cy.get('.title').should('contain','Products')    
        })    
      
    });
    it('Incorrect User login credentials', () => {
        cy.get('@credentials').then((cred)=>{
        cy.get("#user-name").type(cred.locked_username)
        cy.get("#password").type(cred.system_password)
        cy.get("#login-button").click()
        cy.get('h3').should('have.text','Epic sadface: Sorry, this user has been locked out.')    
        })    
      
    });

    it('Incorrect Password Check', () => {
        cy.get('@credentials').then((cred)=>{
        cy.get("#user-name").type(cred.locked_username)
        cy.get("#password").type(cred.dummy_password)
        cy.get("#login-button").click()
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service')    
        })    
      
    });
});