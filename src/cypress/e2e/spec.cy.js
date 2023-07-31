describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('correct navbar length', ()=>{
    cy.visit('http://localhost:3000')
    cy.get('.top-bar li')
    .should('have.length', 5)
  })
  it('correct title', ()=>{
    cy.visit('http://localhost:3000')
    cy.get('.vanceApex')
    .should('be.visible')
  })

  it('Product page items', ()=>{
    cy.visit('http://localhost:3000')
    cy.get('.top-bar li')
    .first()
    .click()
    cy.get('#slider .product-container')
    .should('have.length', 15)
  })

  it('empty cart by default', ()=>{
    cy.visit('http://localhost:3000')
    cy.get('.top-bar li')
    .first()
    .click()
    cy.get('.shop')
    .click()
    cy.get('.shopHolder')
    .should('have.length', 1)
  })

  it('cart item counter updates', ()=>{
    cy.visit('http://localhost:3000')
    cy.get('.top-bar li')
    .first()
    .click()
    cy.get('.shop')
    .click()
    cy.get('.shopHolder')
    .should('have.length', 1)
    cy.get('.shop')
    .click()
    cy.get('#slider .product-container button')
    .first()
    .click()
    cy.get('.top-bar li h1')
    .should('have.text',1)
  })
})