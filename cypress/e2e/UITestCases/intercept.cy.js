describe('INTERCEPT METHOD CHECK ', () => {
    it('Intial validation', () => {
        cy.visit("http://localhost:8888/#/")
        cy.get(".new-todo")
         .type("todo-A {enter}")
        .type('todo-B {enter}')
        cy.get('.todo-list li')
        .should('have.length',2)
        .and('contain','todo-A')
        .and('contain','todo-B')
    });

    it('Mock API Response',()=>{
        
        cy.intercept("GET","http://localhost:8888/#/",{
           fixture:".//interceptData.json"
        }).as('todo-list')
     
        cy.visit("http://localhost:8888")
        cy.get('.todo-list li')
        .should('have.length',0)
    })

    it('Mocked a ready todolist API Response',()=>{
        const stubsample = [{
            "title":"Mocked API Value",
            "completed":true,
            "id":"1"
        }]
        cy.intercept("GET","http://localhost:8888/#/",{
           body:stubsample
        }).as('todo-update-list')
        cy.visit("http://localhost:8888")
        
    })
});