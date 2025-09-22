class languageLearningPage{
    visitLanguageLearning(){
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
                win.location.href = url;
            });
        });
        cy.contains('Language Learning').scrollIntoView().click()
    }
    displayLanguageDetails(){
       
        cy.get('span.cds-button-label').contains('Show 43 more').click()
        cy.get(".cds-161").find('[data-testid="search-filter-group-Language"]')
        cy.get('[data-testid="search-filter-group-Language"]').find('.css-1xi2dvh').each(($el, index, $list)=>{
            cy.wrap($el)
            .find('input[type="checkbox"]')
            .scrollIntoView()
            .check({ force: true });
            cy.wait(2000);
            const lbox=$el.text()
            const lsplit = lbox.split("(")
            const lname=lsplit[0].trim()
            cy.log(`Language:${lname}`)
            cy.get('[data-testid="search-filter-group-Level"]').find('.css-1xi2dvh').each(($el, index, $list)=>{
                //cy.wrap($el).click()
                const lbox=$el.text()
                const lsplit = lbox.split("(")
                const levelType=lsplit[0].trim()
                const levelCount=lsplit[1].trim()
                cy.log(`Level:${levelType}, Count:${levelCount}`)
                //cy.wrap($el).click()
            })
        cy.wrap($el)
            .find('input[type="checkbox"]')
            .scrollIntoView()
            .uncheck({ force: true });
            cy.wait(1000);
        })
 
       
    }
}
export default new languageLearningPage