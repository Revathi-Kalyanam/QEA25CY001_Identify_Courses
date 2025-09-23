class forBusinessesPage {
  visitForBusinesses() {
    cy.contains('For Businesses').should('be.visible').first().click();
    cy.url().should('include', '/business');
  }
 
  skillTracksCount() {
    cy.contains('Explore Skill Tracks').should('be.visible').scrollIntoView();
    cy.get('div.css-6pqykw').should('have.length.greaterThan', 0).each(($el, index, $list) => {
      const skillTrackName = $el.find('.css-1ca187 h3').text();
      cy.log(`Skill Track Name ---> ${skillTrackName}`);
      expect(skillTrackName).to.not.be.empty;
 
      const skillTracksCount = $list.length;
      if (index === skillTracksCount - 1) {
        cy.log(`Skill Tracks Count ---> ${skillTracksCount}`);
        expect(skillTracksCount).to.be.greaterThan(0);
      }
    });
  }
 
  fillForm(formDetails) {
    cy.contains('Ready to learn more?').should('be.visible').scrollIntoView();
    cy.get('input[id="FirstName"]').type(formDetails.firstName);
    cy.get('input[id="LastName"]').type(formDetails.lastName);
    cy.get('input[id="Email"]').type(formDetails.email);
    cy.get('input[id="Phone"]').type(formDetails.phone);
    cy.get('select[id="rentalField9"]').select(formDetails.orgType);
    cy.get('input[id="Company"]').type(formDetails.companyName);
    cy.get('select[id="Employee_Range__c"]').select(formDetails.companySize);
    cy.get('select[id="Country"]').select(formDetails.country);
    cy.get('select[id="State"]').should('be.visible').select(formDetails.state);
    cy.get('button[type="submit"]').click();
 
    cy.get('#ValidMsgEmail').should('be.visible').then(($el) => {
      const err = $el.text().trim();
      cy.log(`Error Message: ${err}`);
      expect(err).to.contain('valid email');
    });
  }
}
 
export default new forBusinessesPage();