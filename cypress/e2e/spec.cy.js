import HomePage from '../support/pages/homePage'


describe('template spec', () => {
  let testData
  before(()=>{
    cy.fixture('testData').then((data) =>{
      testData = data;
    })
  })
  beforeEach('visit coursera',()=>{
    const {urlp} = testData
    HomePage.visit(urlp)
    cy.url().should('equal','https://www.coursera.org/')
  })
  it('search for web development courses',()=>{
    HomePage.searchCourse(testData.courseName)
  })
  it('language learning',()=>{
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
          win.location.href = url;
      });
    });
    cy.contains('Language Learning').click()
    cy.contains("All results").scrollIntoView()
    cy.get('#search-page-filters')
  })

  Cypress.on('uncaught:exception', () => {
    return false;
  });

})