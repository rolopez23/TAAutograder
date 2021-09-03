const blogs = require('../../fixtures/blogmodo/blogs.json');

describe('Stage 1 TA Report', () => {
  beforeEach(()=>{
    cy.intercept('get','/api/blogs').as('getBlogs');
    cy.visit('/')
    cy.wait('@getBlogs')
  })
  
  it('App renders', () => {
    cy.visit('/')
  })

  it('makes an API call on load', ()=> {
   cy.get('@getBlogs').should('exist');
  })

  it('Renders intercepted list of data', () => {
    cy.intercept('get', '/api/blogs', blogs).as("stubbedGetBlogs");
    cy.visit('/');
    cy.wait('@stubbedGetBlogs');
    cy.contains("Rob Lopez").should('exist');
    cy.contains("Claire Chen").should('exist');
    cy.contains("Test1").should('exist');
    cy.contains("Test2").should('exist');
    cy.contains("P2C").should('exist');
  })

  it('Renders list of data from database', () => {
    cy.contains("Tae Sung Kim").should('exist');
    cy.contains("Chatty Cat").should('exist');
    cy.contains("local animal shelter").should('exist');
    cy.contains("Sandeep Gonnabathula").should('exist');
    cy.contains("Yasmine Matterson").should('exist');
  })

  it('Correctly formats dates', () => {
    cy.contains("4 years ago").should('exist')
    cy.contains("2017-11-14T05:57:26.037Z").should('not.exist')
  })

  it('Lists blog posts in order', ()=> {
    let index = 0;
    const titles = ['Chatty Cat Tells Long Yarn', 'Corgi With Cork Shaped Birthmark Declared Adorable', `Corgi Gifted At Sploots To Teach Yoga`,`Owner Accuses Cat Of Having A Bad “Catitude”`, "Hipster Owners Create Cat DJ Sensation"];
    cy.get('.feed-list-item-title').each(div=>{
      expect(div.text()).to.equal(titles[index]);
      index++;
    })
  })
})