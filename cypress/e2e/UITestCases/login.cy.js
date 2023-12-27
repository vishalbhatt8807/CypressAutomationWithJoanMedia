import homesoucepage from "../pages/homesoucepage";

describe('Login Functionality Check', () => {;
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    });
    it('Validate Standard User Credentials', () => {
        cy.log(cy.get("#user-name").should('have.attr',"placeholder"))
        //Disable log for requests
        cy.intercept({resourceType:/xhr|fetch/},{log:false})
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should('include','/inventory.html')
    });

    it('Validate Standard UserName but invalid Password', () => {
        cy.log(cy.get("#user-name").should('have.attr',"placeholder"))
        //Disable log for requests
        cy.intercept({resourceType:/xhr|fetch/},{log:false})
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce1")
        cy.get("#login-button").click()
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service')
    });

    it('Validate Locked-Out User Credentials', () => {
        cy.log(cy.get("#user-name").should('have.attr',"placeholder"))
        //Disable log for requests
        cy.intercept({resourceType:/xhr|fetch/},{log:false})
        cy.get("#user-name").type("locked_out_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get("h3").should('have.text','Epic sadface: Sorry, this user has been locked out.')
    });
});