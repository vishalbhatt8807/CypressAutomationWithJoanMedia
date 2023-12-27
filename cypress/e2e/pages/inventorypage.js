class inventorypage{

    elements={
            inventoryTitle:()=> cy.get(".title")
    }

    getInventoryTitle(){
       this.elements.inventoryTitle();
    }
}
module.exports = new inventorypage()