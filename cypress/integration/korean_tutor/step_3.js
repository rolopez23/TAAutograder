const phrases = require('../../fixtures/phrases.json');

describe('Stage 3 report', () => {
  beforeEach(() => {
    cy.intercept('get','/api/phrases', phrases).as('getPhrases');
    cy.visit('/');
    cy.wait('@getPhrases');
  })


  it('Finds Reveal Translation as default', () => {

    cy.contains('Practice').click()
    cy.contains('reveal', {matchCase: false})
  })

  it('Toggles translation on click', () => {
    cy.contains('Practice').click()
    cy.contains('reveal', {matchCase: false}).should('exist')
    cy.get('div.card-eng').click()
    cy.contains('rom1').should('exist');
    cy.get('div.card-eng').click()
    cy.contains('reveal', {matchCase: false}).should('exist')
  })

  it('Resets to reveal', () => {
    cy.contains('Practice').click()
    cy.contains('reveal', {matchCase: false}).should('exist')
    cy.get('div.card-eng').click()
    cy.contains('Phrase List').click()
    cy.contains('Practice').click()
    cy.contains('reveal', {matchCase: false}).should('exist')
  })
})

