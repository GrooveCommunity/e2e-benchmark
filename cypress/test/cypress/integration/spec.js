describe('Default test', () => {
  it('Visit target URL', () => {
    const targetURL = Cypress.env('TARGET_URL');
    const numIterations = parseInt(Cypress.env('NUM_ITERATIONS'));
    const logPath = Cypress.env('LOG_PATH');
    for (let i = 0; i < numIterations; i++) {
      cy.visit(targetURL)
      cy.writeFile(logPath, JSON.stringify({ event: 'pageLoaded', url: targetURL }) + "\n", { flag: 'a+' })
    }
  })
})
