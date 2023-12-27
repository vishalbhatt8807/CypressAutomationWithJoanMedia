import homesoucepage from "../pages/homesoucepage";
import inventorypage from "../pages/inventorypage";

describe('HomeSource Page Object model', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.intercept({resourceType: /xhr|fetch/},{log:false})
    });
    it("Should login successfully in inventory page",()=>{
        homesoucepage.typeusername("standard_user")
        homesoucepage.typepassword("secret_sauce")
        homesoucepage.clickLoginBtn();

        inventorypage.elements.inventoryTitle().should('have.text','Products')
    })

    it("Should get error with Locked Out user",()=>{
        homesoucepage.typeusername("locked_out_user")
        homesoucepage.typepassword("secret_sauce")
        homesoucepage.clickLoginBtn();

        homesoucepage.elements.errorMsg().should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })

    it("Should get error with Incorrect Password",()=>{
        homesoucepage.typeusername("standard_user")
        homesoucepage.typepassword("secret_sauce1")
        homesoucepage.clickLoginBtn();

        homesoucepage.elements.errorMsg().should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
});