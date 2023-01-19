/// <reference types="cypress" />


describe('Work with sync elements', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Deve fazer retrys', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
      
    })

    it('Uso do find', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 1')     
        
        cy.get('#lista li')
        .find('span')
        .should('contain', 'Item 2')   
    })

    it('Uso do Timeout', () => {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo').should('exist')

        //cy.get('#buttonListDOM').click()
        //cy.get('#lista li', {timeout: 30000})
        //.should('contain', 'Item 2')  

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
        .should('have.length', 1)
        cy.get('#lista li span')
        .should('have.length', 2)  
    })

    it('Click retry', () => {
    
        cy.get('#buttonCount')
        .click()
        .click()
        .should('have.value', 111) 
    })

    it.only('Shoud vs Then', () => {
    
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').then($el => {

            //console.log($el)
            expect($el).to.have.length(1)

        })
    })
})