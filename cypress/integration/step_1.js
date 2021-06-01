//Testing suite for Korean Tutor step 1:
describe('Stage 1 TA Report', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  
  it('App renders', () => {
    cy.visit('/')
  })

  it('Renders list of data', () => {
    cy.contains("Hello").should('exist')
    cy.contains("I'm sorry.").should('exist')
    cy.contains("Please take me to the airport.").should('exist')
    cy.contains("Please give me Kimbap.").should('exist')
  })

})