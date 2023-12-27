describe('BROWSER,DOM,ARCH COMMANDS(regression)',{tags:'@regressionTag'}, () => {
    beforeEach(() => {
        cy.visit('https://www.whatismybrowser.com/es/')
    });

    it('Log Web browser infomation', () => {
        cy.log(Cypress.browser.name)
        cy.log(Cypress.browser.isHeaded)
        cy.log(Cypress.browser.isHeadless)
        cy.log(Cypress.browser.family)
        cy.log(Cypress.browser.path)
        cy.log(Cypress.browser.displayName)
        cy.log(Cypress.browser.version)
        cy.log(Cypress.browser.channel)
    });

    it('Check header depending on the web browser', () => {
        if(Cypress.browser.name === "chrome"){
            cy.get('.string-major a').should('have.text','Chrome 120 on Windows 10')
        }else if(Cypress.browser.name === "firefox"){
            cy.get('.string-major a').should('have.text','Firefox 121 on Windows 10')
        }
    });
});