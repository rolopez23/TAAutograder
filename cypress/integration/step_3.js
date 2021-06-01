describe('Stage 3 report', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(1500)
  })

  it('App renders', () => {
    cy.visit('/')
  })

  it('Finds Reveal Translation as default', () => {

    cy.contains('Practice').click()
    cy.contains('reveal', {matchCase: false})
  })

  it('Toggles translation on click', () => {
    cy.contains('Practice').click()
    cy.contains('reveal', {matchCase: false}).click()
    cy.contains('Hello').should('exist')
    cy.contains('Hello', {matchCase: false}).click()
    cy.contains('reveal', {matchCase: false}).should('exist')
  })

  it('Toggles translation on multiple elements click', () => {
    cy.contains('Practice').click()
    cy.contains('Almost').click()
    cy.contains('reveal', {matchCase: false}).click()
    cy.contains('Thank').should('exist')
    cy.contains('Thank', {matchCase: false}).click()
    cy.contains('reveal', {matchCase: false}).should('exist')
  })

  it('Hides the next element as default', () => {
    cy.contains('Practice').click()
    cy.contains('reveal', {matchCase: false}).click()
    cy.contains('Almost').click()
    cy.contains('Reveal').should('exist')


  })


})

