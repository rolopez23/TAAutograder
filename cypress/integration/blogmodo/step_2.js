describe('Stage 2 TA Report', () => {
  beforeEach(()=>{
    cy.intercept('get','/api/blogs').as('getBlogs');
    cy.visit('/')
    cy.wait('@getBlogs')
  })

  it('A User can go to a single blog post by click on a title', ()=> {
    cy.contains('Chatty Cat Tells Long Yarn').click()
    cy.contains('Chatty Cat').should('exist');
    cy.contains('Sandeep Gonnabathula').should('not.exist');
  })

  it('A User can click on an image', ()=>{
    cy.get('.feed-list-item-image').then((divs)=>{
      divs[1].click();
      cy.contains('Chatty Cat').should('not.exist');
      cy.contains('Sandeep Gonnabathula').should('exist');
    })
  })

  it('should allow navigation back to main site', ()=> {
    cy.contains('Corgi Gifted At Sploots To Teach Yoga').click()
    cy.contains('Tae Sung Kim').should('not.exist');
    cy.get('.nav-unselected').then((divs)=>{
      divs[0].click()
      cy.contains('Tae Sung Kim').should('exist');
    })
    
  })

  it('should correctly make paragraphs', ()=> {
    cy.contains('Hipster Owners Create Cat DJ Sensation').click()
    cy.get('p').then((paragraphs)=>{
      expect(paragraphs.length).to.equal(4)
    })
    
  })

})