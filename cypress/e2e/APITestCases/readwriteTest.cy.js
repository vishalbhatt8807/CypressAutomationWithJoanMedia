describe('API TESTING USING CYPRESS', () => {

    it('Write response in file', () => {
        cy.request('GET',"https://reqres.in/api/users/2")
        .then((response)=>{
        cy.log(response.body.data)
          cy.writeFile("cypress/fixtures/readwrite.json",response.body.data)
        expect(response.status).to.eq(200)
        expect(response.body.data.first_name).to.eq("Janet")
        expect(response).to.have.property('body')
        expect(response).to.have.property('headers')
        
               cy.log(response.body.data.first_name) 
               cy.log(response.body.data.last_name)
               cy.log(response.body.data.email)
               cy.log(response.body.data.id) 
        });
       
    }); 
 
    // it('Adding more object to arrays in response in file', () => {
    //     cy.request('GET',"https://reqres.in/api/users/2")
    //     .its('body').then($object=>{
    //         cy.readFile("cypress/fixtures/readwrite.json").then(array=>{
    //             array.push($object)
    //             cy.writeFile("cypress/fixtures/readwrite.json",array)
    //         })
    //     })
       
    // }); 
 
})