//Testing suite for Korean Tutor step 1:
const phrases = require('../../fixtures/phrases.json');

describe('Stage 1 TA Report', () => {
  beforeEach(()=>{
    cy.intercept('get','/api/phrases').as('getPhrases');
    cy.visit('/')
    cy.wait('@getPhrases')
  })
  
  it('App renders', () => {
    cy.visit('/')
  })

  it('makes an API call on load', ()=> {
   cy.get('@getPhrases').should('exist')
  })


  it('Renders list of data from database', () => {
    cy.contains("Hello").should('exist')
    cy.contains("I'm sorry.").should('exist')
    cy.contains("Please take me to the airport.").should('exist')
    cy.contains("Please give me Kimbap.").should('exist')
  })

  it('Renders intercepted list of data', () => {
    cy.intercept('get', 'api/phrases', phrases).as("stubbedGetPhrases")
    cy.visit('/')
    cy.wait('@stubbedGetPhrases')
    cy.contains("korean1").should('exist')
    cy.contains("k2").should('exist')
    cy.contains("rom1").should('exist')
    cy.contains("r2").should('exist')
  })

})