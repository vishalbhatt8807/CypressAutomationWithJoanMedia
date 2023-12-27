
describe('GET Methods Specs', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    it('GET Methods', () => {
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should('include','/inventory.html')
    });

    it('EQ|FIRST|LAST Method', () => {
        cy.get("input").eq(0).type("standard_user")
        cy.get("input").eq(1).type("secret_sauce")
        cy.get("input").last().click()
    });

    
    it('FILTER Method', () => {
        cy.get("input").filter('[name="user-name"]').type("standard_user")
        cy.get("input").filter('[name="password"]').type("secret_sauce")
        cy.get("input").filter('[name="login-button"]').click()
    });

    it('FIND Method', () => {
        cy.get("form").find('input').eq(0).type("standard_user")
        cy.get("form").find('input').eq(1).type("secret_sauce")
        cy.get("form").find('input').eq(2).click()
    });
});