/// <reference types="cypress" />


describe('Dynamic tests', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    foods.forEach(food => {

        it(`Cadastro com a comida ${food}`, () => {
            cy.get('#formNome').type('Usuario')
            cy.get('#formSobrenome').type('Randoom')
            cy.get(`[name=formSexo][value='M']`).click()
            cy.xpath(`//label[contains(., '${food}')]/preceding-sibling::input`).click()
            cy.get('[data-test="dataEscolaridade"]').select('Doutorado')
            cy.get('[data-testid="dataEsportes"]').select('Corrida')

            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')

        })
    })

    it.only('Deve selecionar todos com Each', () => {
        cy.get('#formNome').type('Usuario')
        cy.get('#formSobrenome').type('Randoom')
        cy.get(`[name=formSexo][value='M']`).click()

        cy.get('[name=formComidaFavorita]').each($el => {

            if ($el.val() != 'vegetariano')
                cy.wrap($el).click()
        })

        cy.get('[data-test="dataEscolaridade"]').select('Doutorado')
        cy.get('[data-testid="dataEsportes"]').select('Corrida')

        cy.get('#formCadastrar').click()
        cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
        //cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
    })


})