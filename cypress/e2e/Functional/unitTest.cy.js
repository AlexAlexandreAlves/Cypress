/// <reference types="cypress" />


describe('Deve testar a nivel funcional', () => {
    beforeEach(() => {
        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('.input-group > .form-control').type('joaozinteste@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('1122')
        cy.get('.btn').click()
        cy.get('.toast-message').should('exist')
        cy.get('.toast-message').should('contain','Bem vindo')
    })

  

    it('', () => {

    })

})
