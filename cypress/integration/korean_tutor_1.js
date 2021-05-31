//Testing suite for Korean Tutor step 1:
describe('Stage 1 TA Report', ()=> {
  it('App renders', ()=> {
    cy.visit('/')
  })
  
  it('Renders list of data', ()=>{
    cy.visit('/')
    cy.contains("Hello")
    cy.contains("I'm sorry.")
    cy.contains("Please take me to the airport.")
    cy.contains("Please give me Kimbap.")
  })

})