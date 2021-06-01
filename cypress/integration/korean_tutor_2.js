

describe('Stage 1 still renders', ()=> {
  beforeEach(()=> {
    cy.visit('/')
    cy.wait(500)
  })

  it('App renders', ()=> {
    cy.visit('/')
  })
})

describe('Stage 2 complete', ()=> {
  it('Practice advances on all clicks', ()=> {
    // cy.fixture('./fixtures/phrases.json').as('phrases.json');

    cy.contains('Practice').click()
    let text = null;
    cy.get("div.card-kor").should($korean=> {
      text = $korean.text()
    })
    //advance
    cy.contains('Not yet').click()
    cy.get("div.card-kor").should($korean => {
      expect($korean.text()).to.not.equal(text);
      text = $korean.text()
    })
    cy.contains('Almost').click()
    cy.get("div.card-kor").should($korean => {
      expect($korean.text()).to.not.equal(text);
      text = $korean.text()
    })

    cy.contains('Got it').click()
    cy.get("div.card-kor").should($korean => {
      expect($korean.text()).to.not.equal(text);
    })
  })
})

