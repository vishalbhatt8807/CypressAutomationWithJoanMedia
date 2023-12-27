describe('ALIAS DEMO(regression)',{tags:'@regressionTag'}, () => {
    
    beforeEach(()=>{
        cy.visit('https://www.google.com')
    })
    // In Alias if we need pass value to another It block than we need to use function instead
    // of => function .
    it('Alias', function(){
        cy.get('.lnXdpd').last().invoke('attr','alt').as('headerText')
        cy.get('a.gb_B').eq(0).then($test=>{
            const test1 = $test.text()
            cy.wrap(test1).as('gmailwrap')
        })
    });

    it('Test Alias value',function(){
        cy.log(this.headerText)
        cy.log(this.gmailwrap)
    })
});