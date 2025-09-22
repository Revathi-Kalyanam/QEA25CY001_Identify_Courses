class forBusinessesPage{
    visitForBusinesses(){
        cy.contains('For Businesses').first().click()
        //cy.wait(1000)
    }
    skillTracksCount(){
        cy.contains('Explore Skill Tracks').scrollIntoView()
        cy.get('div.css-6pqykw').each(($el, index, $list)=>{
            const skillTrackName = $el.find('.css-1ca187 h3').text()
            cy.log(`Skill Track Name ---> ${skillTrackName}`)
            const skillTracksCount = $list.length
            if(index === skillTracksCount-1) cy.log(`Skill Tracks Count ---> ${skillTracksCount}`)
        })
    }
 
    fillForm(fromDetails){
        cy.contains('Ready to learn more?').scrollIntoView();
        cy.get('input[id="FirstName"]').type(fromDetails.firstName);
        cy.get('input[id="LastName"]').type(fromDetails.lastName);
        cy.get('input[id="Email"]').type(fromDetails.email);
        cy.get('input[id="Phone"]').type(fromDetails.phone);
        //cy.get('select[id="rentalField9"]').select('Business');
        //cy.get('input[id="Company"]').click();
        //cy.get('input[id="Title"]').should('be.visible').type('QA Engineer');
 
       
        cy.get('select[id="rentalField9"]').select(fromDetails.orgType);
        //cy.get('input[id="Company"]').click();
        //cy.get('select[id="Institution_Type__c"]').should('be.visible').select(fromDetails.instType);
        cy.get('input[id="Company"]').type(fromDetails.companyName);
        cy.get('select[id="Employee_Range__c"]').select(fromDetails.companySize);
        cy.get('select[id="Country"]').select(fromDetails.country);
        cy.get('input[id="Company"]').click();
        cy.get('select[id="State"]').should('be.visible').select(fromDetails.state);
        //cy.get('select[id="What_the_lead_asked_for_on_the_website__c"]').select(fromDetails.needs);
        //cy.get('input[id="Company"]').click();
        //cy.get('[name="rentalField5"]').type(fromDetails.needsDesc);
        //cy.get('select[id="What_the_lead_asked_for_on_the_website__c"]').select(fromDetails.needs);
        //cy.get('input[id="Company"]').click(); // trigger DOM update
        //cy.get('input[placeholder="Expected number of learners"]').should('be.visible').type('100');
        cy.get('button[type="submit"]').click()
        cy.get('#ValidMsgEmail').then(($el)=>{
            const err = $el.text().trim()
            cy.log(`Error Message: ${err}`)
        })
           
    }
 
}
export default new forBusinessesPage