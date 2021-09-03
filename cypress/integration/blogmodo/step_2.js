describe('Stage 1 TA Report', () => {
  beforeEach(()=>{
    cy.intercept('get','/api/blogs').as('getBlogs');
    cy.visit('/')
    cy.wait('@getBlogs')
  })

  

})