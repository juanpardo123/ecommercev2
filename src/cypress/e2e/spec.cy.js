describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  it('correct title', ()=>{
    cy.visit('http://localhost:3000')
    cy.get('.top-bar li')
    .should('have.length', 5)
  })
})