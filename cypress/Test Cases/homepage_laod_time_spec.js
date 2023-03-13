describe('Homepage load time test', () => {
    it('loads within 3 seconds', () => {
      cy.visit(Cypress.config('url'))
      cy.intercept('GET', Cypress.config('url')).as('homepage')
      cy.wait('@homepage', {timeout: 3000})
    })
  })
  