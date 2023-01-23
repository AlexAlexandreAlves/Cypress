/// <reference types="cypress" />


describe('Work with basic alerts', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            //console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })

    })

    it('Alert com Mock', () => {
        const stub = cy.stub().as('Alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
            })

    })

    it('Confirm', () => {
        cy.on('window:confirm', msg => {
            //console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            //console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })

        cy.get('#confirm').click()
    })

    it('Deny', () => {
        cy.on('window:confirm', msg => {
            //console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            //console.log(msg)
            expect(msg).to.be.equal('Negado')
        })

        cy.get('#confirm').click()
    })

    it.only('Prompt', () => {
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42').as('Window')
        })
        cy.on('window:confirm', msg => {
            //console.log(msg)
            expect(msg).to.be.equal('Era 42?')
            return false
        })
        cy.on('window:alert', msg => {
            //console.log(msg)
            expect(msg).to.be.equal(':(')
            expect(msg).to.be.not.eql(':D')
        })
        cy.get('#prompt').click()
    })

})
