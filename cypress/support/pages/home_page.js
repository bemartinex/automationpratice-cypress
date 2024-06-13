/// <reference types="cypress" />

export default{
    accessRegisterPage() {
        //Dado que o usuario acessa a pagina de Login
            cy.visit('/')
                .get('.header-logo')
            cy.get('.fa-lock')
                .click()
            cy.get('.account_form > h3')
                .should('have.text', 'Cadastro de usuário')
    }
}