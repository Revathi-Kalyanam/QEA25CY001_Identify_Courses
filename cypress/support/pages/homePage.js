class HomePage{
    visit(urlp){
        cy.viewport(1920, 1080);
        cy.visit(urlp);
    }
    searchCourse(courseName){
        cy.get('#search-autocomplete-input').type(`${courseName}{enter}`)
        cy.contains('Results for "web development"').should('be.visible')
    }
    applyFilters(){
        //cy.get('[type="checkbox"][span="Beginner"]').scrollIntoView().check().should('be.checked');
        cy.contains('Beginner').click({ force: true })
        cy.contains('English').click({force: true})
    }
    displayFirstTwoCourseDetails(){
         cy.get('#searchResults').find('ul li').each(($el, index, $list)=>{
            const name=$el.find('h3.cds-CommonCard-title').text()
            const rating=$el.find('span.css-6ecy9b').text()
            const learningHours = $el.find('div.cds-CommonCard-metadata').text()
            if(index <2){
                let str = learningHours.split('·')
                const res = str[2].trim()
                cy.log(`Course Name: ${name}, Rating: ${rating}, Learning Hours: ${res}`)
            }            
        })
    }
 
}
export default new HomePage