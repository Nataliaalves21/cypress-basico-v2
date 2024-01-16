// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    
    })

    // it('verifica o título da aplicação', function() {
    //     cy.title().should('be.equal' , 'Central de Atendimento ao Cliente TAT')
    // })

    // it.only('preenche os campos obrigatórios e envia o formulário' , function () {
    //     cy.get('#firstName')

    //        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')

    // })

    })