describe('KEYSTOKE Demo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('Cypress Keyboard Slowest One- Keystore delay',{keystrokeDelay:100}, () => {
        cy.get('#user-name').type("This is demo")
    });
    it('Cypress Keyboard Fastst One- Keystore delay', () => {
        cy.get('#user-name').type("This is demo1")
    });
    it('Cypress Keyboard Midium Pace One- Keystore delay',{keystrokeDelay:0}, () => {
        cy.get('#user-name').type("This is demo2")
    });
});