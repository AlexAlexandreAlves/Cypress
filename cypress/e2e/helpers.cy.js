/// <reference types="cypress" />

describe('Helpers', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Wrap', () => {
        //    cy.get('#formNome').then($el =>{
        //        cy.wrap($el).type('funciona???')
        //    })
        //})

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }), 500
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o primeiro'))

        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei o segundo'))

        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)

    })
})
