describe('API TESTING USING CYPRESS', () => {
    
    let id;
    const payload = {"name":"John",
    "job":"Team Lead"
   };
    it('POST Request',()=>{
        cy.request('POST',"https://reqres.in/api/users",
        payload).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body.name).to.eq("John")
            expect(response.body.job).to.eq("Team Lead")
            expect(response.statusText).to.eq("Created")
           // expect(response.body).to.deep.eq(payload)
           id = response.body.id
            cy.log(response.body.id)
            cy.log(response.headers)
            expect(response.headers['content-type']).to.eql("application/json; charset=utf-8")
        })     
    })

    it('GET Request', () => {
        cy.request('GET',"https://reqres.in/api/users/2")
        .then((response)=>{
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
    it('PUT Request', () => {
        cy.request('PUT',"https://reqres.in/api/users/2",
        {"name":"CENA",
         "job":"Wrestler"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("CENA")
            expect(response.body.job).to.eq("Wrestler")
            expect(response.statusText).to.eq("OK")
           id = response.body.id
            cy.log(response.body.id)
            cy.log(response.headers)
            expect(response.headers['content-type']).to.eql("application/json; charset=utf-8")
        })
       
    });
    
    it('PATCH Request', () => {
        cy.request('PATCH',"https://reqres.in/api/users/2",
        {
         "job":"Boxer"
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.job).to.eq("Boxer")
            expect(response.statusText).to.eq("OK")
           id = response.body.id
            cy.log(response.body.id)
            cy.log(response.headers)
            expect(response.headers['content-type']).to.eql("application/json; charset=utf-8")
        })
       
    });
    it('DELETE Request', () => {
        cy.request('DELETE',"https://reqres.in/api/users/2")
        .then((response)=>{
        expect(response.status).to.eq(204)
        expect(response.statusText).to.eq('No Content')
        });
    });
});