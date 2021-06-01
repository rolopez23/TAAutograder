describe('Stage 3 report', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(500)
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
    cy.contains('Hello')
    cy.contains('Hello', {matchCase: false}).click()
    cy.contains('reveal', {matchCase: false})
  })

  it('Toggles translation on multiple elements click', () => {
    cy.contains('Practice').click()
    cy.contains('reveal', {matchCase: false}).click()
    cy.contains('Hello')
    cy.contains('Hello', {matchCase: false}).click()
    cy.contains('reveal', {matchCase: false})
  })


})

