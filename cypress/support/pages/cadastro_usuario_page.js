/// <reference types="cypress" />

// PO - Elementos
const elements = {
    fields: {
        name: '#user',
        email:'#email',
        password:'#password'
    },
    buttons: {
        btnRegister:'#btnRegister'
    },
    messages:{
        fillFieldMessage:'#errorMessageFirstName',
        registerSucess: '#swal2-title',
        wellcomeName: '#swal2-html-container'
    }
}

// PO - Funções/Comandos
export default{
fillName(name){
    cy.get(elements.fields.name)
        .type(name)
},

fillEmail(email){
    cy.get(elements.fields.email)
        .type(email)
},

fillPassword(password){
    cy.get(elements.fields.password)
        .type(password)
},

clickRegister(){
    cy.get(elements.buttons.btnRegister)
        .click()
},

checkFillFieldMessage(message){
    cy.get(elements.messages.fillFieldMessage)
        .should('be.visible')
        .should('contain', message)
},

checkSucessMessage(message, name){
    cy.get(elements.messages.registerSucess)
        .should('be.visible')
        .should('contain', message)
    cy.get(elements.messages.wellcomeName)
        .should('be.visible')
        .should('contain', `Bem-vindo ${name}`)
}
}