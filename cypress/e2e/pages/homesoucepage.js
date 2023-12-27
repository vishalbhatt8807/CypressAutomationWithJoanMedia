class homesoucepage{

    elements={
        username:()=>cy.get("#user-name"),
        password:()=>cy.get('#password'),
        loginBtn:()=> cy.get("#login-button"),
        errorMsg:()=>cy.get('h3')
    }

    typeusername(user){
        this.elements.username().type(user)
    }
    
    typepassword(pass){
        this.elements.password().type(pass)
    }

    clickLoginBtn(){
        this.elements.loginBtn().click();
    }
}
module.exports = new homesoucepage();