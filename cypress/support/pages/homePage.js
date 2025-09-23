class HomePage {
  visit(urlp) {
    cy.viewport(1920, 1080);
    cy.visit(urlp);
    cy.url().should('eq', 'https://www.coursera.org/');
  }
 
  searchCourse(courseName) {
    cy.get('#search-autocomplete-input').should('be.visible').type(`${courseName}{enter}`);
    cy.contains(`Results for "${courseName}"`).should('be.visible');
  }
 
  applyFilters() {
    cy.contains('Beginner').click({ force: true });
    cy.contains('English').click({ force: true });
 
    cy.get('[data-testid="search-filter-group-Level"]').should('contain.text', 'Beginner');
    cy.get('[data-testid="search-filter-group-Language"]').should('contain.text', 'English');
  }
 
  displayFirstTwoCourseDetails() {
    cy.get('#searchResults ul li').should('have.length.greaterThan', 1);
    cy.get('#searchResults ul li').each(($el, index, $list) => {
      const name = $el.find('h3.cds-CommonCard-title').text();
      const rating = $el.find('span.css-6ecy9b').text();
      const learningHours = $el.find('div.cds-CommonCard-metadata').text();
      if (index < 2) {
        let str = learningHours.split('·');
        const res = str[2]?.trim();
        cy.log(`Course Name: ${name}, Rating: ${rating}, Learning Hours: ${res}`);
        expect(name).to.not.be.empty;
        expect(rating).to.not.be.empty;
        expect(res).to.not.be.empty;
      }
    });
  }
}
 
export default new HomePage();