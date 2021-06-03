describe('Stage 4 report', () => {
  beforeEach(() => {
    cy.intercept('get','/api/phrases').as('getPhrases');
    cy.intercept('patch','/api/phrases').as('updatePhrase');
    cy.visit('/')
    cy.wait('@getPhrases')
  })

  it('Sends a patch request on click', ()=> {
    cy.contains('Practice').click();
    cy.contains('Not yet').click();
    cy.contains('Not yet').click();
    cy.contains('Not yet').click();
    cy.get('@updatePhrase').should('exist')
  })

  it('Updates phrase list', ()=> {

    cy.contains('Practice').click();
    cy.contains('Got it').click()
    cy.contains('Almost').click()
    cy.contains('Phrase List').click()
    const element1 = cy.get('div.phrase-row').contains('Hello').parent()
    element1.contains('Got it')
    const element2 = cy.get('div.phrase-row').contains('Thank you').parent()
    element2.contains('Almost')
  })

  it('The changes persist', ()=> {
    const element1 = cy.get('div.phrase-row').contains('Hello').parent()
    element1.contains('Got it').should('exist');
    const element2 = cy.get('div.phrase-row').contains('Thank you').parent()
    element2.contains('Almost').should('exist');
  })
})