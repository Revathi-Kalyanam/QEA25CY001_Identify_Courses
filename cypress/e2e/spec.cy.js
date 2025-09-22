import HomePage from '../support/pages/homePage'
import languageLearningPage from '../support/pages/languageLearningPage'
 
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
})