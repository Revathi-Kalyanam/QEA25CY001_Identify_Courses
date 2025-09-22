import HomePage from '../support/pages/homePage'
import languageLearningPage from '../support/pages/languageLearningPage'
import forBusinessesPage from '../support/pages/forBusinessesPage'
 
describe('template spec', () => {
  let testData
  before(()=>{
    cy.fixture('testData').then((data) =>{
      testData = data;
    })
  })
  it('visit coursera and search for web development courses',()=>{
    //const {urlp} = testData
    HomePage.visit(testData.urlp)
    cy.url().should('equal','https://www.coursera.org/')
    HomePage.searchCourse(testData.courseName)
    HomePage.applyFilters()
    HomePage.displayFirstTwoCourseDetails()
   
  })
 
  it('visit homepage and navigate to language learning',()=>{
    // const {urlp} = testData
    HomePage.visit(testData.urlp)
    languageLearningPage.visitLanguageLearning()
    languageLearningPage.displayLanguageDetails()
  })

  it('go back to homepage and visit For Businesses page',()=>{
    // const {urlp} = testData
    HomePage.visit(testData.urlp)
    forBusinessesPage.visitForBusinesses()
    forBusinessesPage.skillTracksCount()
    forBusinessesPage.fillForm(testData.formDetails)
  })
 
  Cypress.on('uncaught:exception', () => {
    return false;
  });

})