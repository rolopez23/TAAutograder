describe('Stage 3 report', ()=> {
  it('App renders', ()=> {
    cy.visit('/')
  })

  it('Finds Reveal Translation', async ()=> {
    cy.visit('/')
    cy.wait(500)
    .then(()=> {
      cy.contains('Practice').click()
      expect(cy.contains('Reveal').toBe(true))
    }) 


  })

})