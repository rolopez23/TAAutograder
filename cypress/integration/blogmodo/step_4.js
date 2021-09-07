describe('Stage 4 TA Report', () => {
  beforeEach(() => {
    cy.intercept('get', '/api/blogs').as('getBlogs');
    cy.intercept('post', '/api/blogs').as('postBlogs');
    cy.visit('/')
    cy.wait('@getBlogs')
  })

  it('renders a post component', ()=> {
    cy.contains("Write a Post", {matchCase: false}).click();
    cy.contains("AUTHOR", {matchCase: false}).should('exist');
    cy.contains("PREVIEW", {matchCase: false}).should('exist');
    cy.contains("Save post", {matchCase: false}).should('exist');
  })

  it('Allows a user to update components', ()=>{
    cy.contains("Write a Post", {matchCase: false}).click();
    cy.get('form input:first').type('I know react')
    cy.get('form input:first').should('have.value','I know react');
    cy.get('form input:nth-child(2)').type('test student')
    cy.get('form input:nth-child(2)').should('have.value', 'test student')
    cy.get('form input:nth-child(3)').type('https://source.unsplash.com/1600x900/?cat')
    cy.get('form input:nth-child(3)').should('have.value','https://source.unsplash.com/1600x900/?cat')
    cy.get('form textarea').type('Blog body')
    cy.get('form textarea').should('have.value','Blog body')
    
  })



  it('Creates a fully functioning component', ()=>{
    cy.contains("Write a Post", {matchCase: false}).click();
    cy.get('form input:first').type('I know react')
    cy.get('form input:nth-child(2)').type('test student')
    cy.get('form input:nth-child(3)').type('https://source.unsplash.com/1600x900/?cat')
    cy.get('form textarea').type('Blog body')
    cy.contains("Save post", {matchCase: false}).click();
    cy.get("@postBlogs").should('exist');
    cy.contains("See all posts", {matchCase: false}).click();
    cy.contains("I know react").should('exist');
  })

});