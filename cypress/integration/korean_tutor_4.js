describe('Stage 4 report', () => {
  let text1 = null;
  let text2 = null;

  beforeEach(() => {
    cy.visit('/')
    cy.wait(500)
  })

  it('App renders', () => {
    cy.visit('/')
  })

  it('Updates phrase list', ()=> {

    cy.contains('Practice').click();
    cy.get("div.card-eng").click();
    cy.get("div.card-eng").should($english => {
      text1 = $english.text()
    })
    cy.contains('Got it').click()
    cy.get("div.card-eng").click(); 
    cy.get("div.card-eng").should($english => {
      text2 = $english.text()
    })
    cy.contains('Almost').click()
    cy.contains('Phrase List').click()
    const element1 = cy.get('div.phrase-row').contains('Hello').parent()
    element1.contains('Got it')
    const element2 = cy.get('div.phrase-row').contains('Thank you').parent()
    element2.contains('Almost')
  })

  it('The changes persist', ()=> {
    const element1 = cy.get('div.phrase-row').contains('Hello').parent()
    console.log(element1)
    element1.contains('Got it').should('exist');
    const element2 = cy.get('div.phrase-row').contains('Thank you').parent()
    console.log(element2)
    element2.contains('Almost').should('exist');
  })
})