describe('Retry-Ability Session', () => {
   beforeEach(() => {
    cy.visit('http://localhost:8888/#/')
    cy.get(".new-todo")
    .type("todo-A {enter}")
    .type('todo-B {enter}')
   });
   
    it('Should have "<li>" elements ', () => {
        cy.get(".todo-list li").should('have.length',2)
    });
});