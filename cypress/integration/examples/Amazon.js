describe("Amazon Search TCs",function(){
    it("Search_01_Paginated_Sorted",function(){
        cy.visit("https://amazon.com")
        //cy.xpath("//select[@id='searchDropdownBox']").click();
       // cy.wait(5000)
        cy.xpath("//select[@id='searchDropdownBox']").select("Books",{force:true})
        // cy.get("select#searchDropdownBox")
        // .select("Books",{force:true})


    })
})