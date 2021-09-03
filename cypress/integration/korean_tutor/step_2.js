const phrases = require('../../fixtures/phrases.json');

describe('Stage 2 complete', ()=> {
  beforeEach(()=> {cy.intercept('get','/api/phrases').as('getPhrases');
    cy.visit('/');
    cy.wait('@getPhrases');
  })

  it('Practice advances on Not Yet button', ()=> {
    cy.contains('Practice').click()
    let text = null;
    cy.get("div.card-rom").should($korean=> {
      text = $korean.text()
    })
    //advance
    cy.contains('Not yet').click()
    cy.get("div.card-rom").should($korean => {
      expect($korean.text()).to.not.equal(text);
    })
  })

  it('Practice advances on Almost button', ()=> {
    cy.contains('Practice').click()
    let text = null;
    cy.get("div.card-rom").should($korean=> {
      text = $korean.text()
    })
    //advance
    cy.contains('Almost').click()
    cy.get("div.card-rom").should($korean => {
      expect($korean.text()).to.not.equal(text);
    })
  })

  it('Practice advances on Got it button', ()=> {
    cy.contains('Practice').click()
    let text = null;
    cy.get("div.card-rom").should($korean=> {
      text = $korean.text()
    })
    //advance
    cy.contains('Got it').click()
    cy.get("div.card-rom").should($korean => {
      expect($korean.text()).to.not.equal(text);
    })
  })



  it('handles loop edge case', ()=>{
    cy.contains('Practice').click()
    for (let i = 0; i < 10; i++) {
      cy.contains('Not Yet').click()
    }
    cy.get("div.card-rom").should('exist')


    //advance
   

  })

})

