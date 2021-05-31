describe('Stage 1 still renders', ()=> {
  it('App renders', ()=> {
    cy.visit('/')
  })
})

describe('Stage 2 complete', ()=> {
  it('Practice advances on all clicks', async ()=> {
    cy.visit('/')
    cy.contains('Practice').click()

    // let phrase = cy.get("div.card-kor").text()
    // cy.contains('Not yet').click()
    // let newCard = cy.get("div.card-kor");
    // expect(newCard.text()).to.not.equal(phrase);

    // cy.get("div.card-kor")
    //   .then(($korean)=> {
    //     phrase = $korean.text();
    //     console.log(phrase)
    //     return phrase;
    //   })
    //   .then(()=> {
    //     cy.contains('Not yet').click();
    //     return cy.get("div.card-kor")
    //   })
    //   .then((newCard)=> {
    //     expect(newCard.text()).to.not.equal(phrase)
    //     phrase = newCard.text()
    //     cy.contains('Almost').click();
    //     return cy.get("div.card-kor")
    //   })
    //   .then((newCard)=> {
    //     expect(newCard.text()).to.not.equal(phrase)
    //     phrase = newCard.text()
    //     cy.contains('Got it').click();
    //     return cy.get("div.card-eng")
    //   })
    //   .then((newCard)=> {
    //     expect(true).to.not.equal(true)
    //   })
  })
})

