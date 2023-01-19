/// <reference types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
        
        cy.title().should(title => {
            console.log(title)
        })

    })

    it.only('Should find and interact with an element ', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple').debug()
        .click() 
        .should('have.value', 'Obrigado!') 


    })
})