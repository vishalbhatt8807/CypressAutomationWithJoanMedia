describe('CUSTOM COMMAND Check(regression)',{tags:'@regressionTag'}, () => {
    
    beforeEach(()=>{
        cy.visit("/")
        cy.sauceLogin("standard_user","secret_sauce")
    })
    it('Validate Login Successfully', () => {
        cy.url().should('contain',"inventory.html")
       
    });

    afterEach(() => {
        cy.sauceLogout(); 
    });
});