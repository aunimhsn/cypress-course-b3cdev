/// <reference types="cypress" />

describe('Test Caesar', () => {
    beforeEach(() => {
        cy.visit('../../app/caesar/index.html')
    })

    it('should display "vguv" for test with key => 2', () => {
        cy.dataCy('cypher-key').clear().type('2')
        cy.dataCy('cypher-msg').type('test')
        cy.dataCy('cypher-btn').click()
        cy.dataCy('cypher-result').should('have.text', 'vguv')
    })

})
