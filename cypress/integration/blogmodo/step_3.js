describe('Stage 3 TA Report', () => {
  beforeEach(() => {
    cy.intercept('get', '/api/blogs').as('getBlogs');
    cy.intercept('patch', '/api/blogs/**').as('patchBlogs');
    cy.visit('/')
    cy.wait('@getBlogs')
  })

  it('Renders an admin view', () => {
    cy.contains('Admin').click();
    cy.contains('Views').should('exist');
    cy.contains('Hipster').should('exist');
  })

  it('Admin View correctly formats data', () => {
    cy.contains('Admin').click();
    cy.contains("2017-11-14T05:57:26.037Z").should('not.exist');
    cy.contains("11/13/2017").should('exist');
  })

  it('Sends a patch request on blog post click', () => {
    cy.contains('Chatty Cat Tells Long Yarn').click()
    cy.get('@patchBlogs').should('exist');
  })

  it('Eventually updates a number', () => {
    let views = null;
    let numbers = [];
    cy.contains('Admin').click();
    cy.get('.stats-list-item-views')
      .each((div) => {
        let text = div.text();
        text = text.replace('Views: ', '');
        text = text.replace('views: ', '');
        text = text.replace('views', '');
        numbers.push(Number(text) + 1);
      })
      .then(()=>{
        cy.contains('See all').click()
        cy.contains('Chatty Cat Tells Long Yarn').click()
        cy.visit('/')
        cy.wait('@getBlogs')
        cy.contains('Admin').click();
        cy.contains(`${numbers[0]}`).should('exist')
      })
  })


});
