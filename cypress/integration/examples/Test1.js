describe('My First Test',function(){
    it('My First Test Case',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input.search-keyword").type("Ca")
        cy.get("div.product:visible").should("have.length",4)
        cy.get(".product").should("have.length",5)
        cy.get(".products").find(".product").should("have.length",4)
        //cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()
       // cy.get(".products>div.product").contains("Carrot")
      //  cy.get('.product-action > button').click()
       cy.xpath("//h4[contains(text(),'Carrot')]/parent::div/div/button").should("have.length",1)
       cy.xpath("//h4[contains(text(),'Carrot')]/parent::div/div/button").click()
       cy.xpath("//h4[contains(text(),'Cashews')]/parent::div/div/button").click()

              
        })
  })