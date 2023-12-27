describe('CUSTOM COMMAND Check', () => {
    
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