const phrases = require('../../fixtures/phrases.json');

describe('Stage 2 complete', ()=> {
  beforeEach(()=> {
    cy.intercept('get','/api/phrases', phrases).as('getPhrases');
    cy.visit('/');
    cy.wait('@getPhrases');
  })

  it('Practice advances on Not Yet button', ()=> {
    cy.contains('Practice').click()
    cy.contains('rom1').should('exist');
    cy.contains('Not yet').click()
    cy.contains("r2").should('exist')
  })

  it('Practice advances on Got it button', ()=> {
    cy.contains('Practice').click()
    cy.contains('rom1').should('exist');
    cy.contains('Got it', {matchCase: false}).click()
    cy.contains("r2").should('exist')
  })

  it('Practice advances on Almost button', ()=> {
    cy.contains('Practice').click()
    cy.contains('rom1').should('exist');
    cy.contains('Almost', {matchCase: false}).click()
    cy.contains('Almost', {matchCase: false}).click()
    cy.contains("r3").should('exist')
  })

  it('handles loop edge case', ()=>{
    cy.contains('Practice').click()
    cy.contains('rom1').should('exist');
    cy.contains('Not yet').click();
    cy.contains('Not yet').click();
    cy.contains('Not yet').click();
    cy.contains('rom1').should('exist');
  })

})

