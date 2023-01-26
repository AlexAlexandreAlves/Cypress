/// <reference types="cypress" />


describe('Work with time', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })


    it('Voltando a hora', () => {
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '26/01/2023')

        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '26/01/2023')

        const data = new Date(2015, 3, 11, 23, 50)
        cy.clock(data.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '11/04/2015')

    })

    it.only('Avançando a hora com método Tick', () => {
        cy.clock() //reseta a hora para 01/01/1970
        cy.tick(1000) // avança a hora conforme necessidade

    })
})
