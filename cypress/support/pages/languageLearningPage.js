class languageLearningPage {
  visitLanguageLearning() {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });
    cy.contains('Language Learning').scrollIntoView().click();
    cy.url().should('include', '/browse/language-learning');
  }
 
  displayLanguageDetails() {
    cy.get('span.cds-button-label').contains('Show 43 more').click();
    cy.get('[data-testid="search-filter-group-Language"]').should('exist');
    cy.get('[data-testid="search-filter-group-Level"]').should('exist');
 
    cy.get('[data-testid="search-filter-group-Language"] .css-1xi2dvh').each(($el) => {
      cy.wrap($el).find('input[type="checkbox"]').scrollIntoView().check({ force: true });
      cy.wait(2000);
      const lbox = $el.text();
      const lsplit = lbox.split('(');
      const lname = lsplit[0].trim();
      cy.log(`Language: ${lname}`);
      expect(lname).to.not.be.empty;
 
      cy.get('[data-testid="search-filter-group-Level"] .css-1xi2dvh').each(($levelEl) => {
        const levelBox = $levelEl.text();
        const levelSplit = levelBox.split('(');
        const levelType = levelSplit[0].trim();
        const levelCount = levelSplit[1]?.replace(')', '').trim()
        cy.log(`Level: ${levelType}, Count: ${levelCount}`);
        expect(levelType).to.not.be.empty;
        expect(levelCount).to.not.be.empty;
      });
 
      cy.wrap($el).find('input[type="checkbox"]').scrollIntoView().uncheck({ force: true });
      cy.wait(1000);
    });
  }
}
 
export default new languageLearningPage();