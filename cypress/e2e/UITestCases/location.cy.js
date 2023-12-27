describe('Validate Location function', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");   
        cy.intercept({resourceType: /xhr|fetch/},{log:false})     
    });
    it('Validate host name', () => {
        cy.location().then((loc)=>{
            expect(loc.host).to.eq("www.saucedemo.com")
            expect(loc.hostname).to.eq("www.saucedemo.com");
            expect(loc.href).to.eq("https://www.saucedemo.com/");
            expect(loc.protocol).to.eq("https:")  

        });
    });
});