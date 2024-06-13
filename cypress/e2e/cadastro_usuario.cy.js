/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page';
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page';
const user = require('../fixtures/user_create.json')
const fakerName = faker.person.fullName()
const fakerEmail = faker.internet.email()
const screens = ['desktop', 'iphone-x', 'macbook-16']

screens.forEach(element => {

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () =>  {
        //Dado que o usuario acessa a pagina de Login
        if(element != 'desktop'){
            cy.viewport(element)
        }


        home_page.accessRegisterPage()
    })

    it('Validar campo nome vazio', () => {
        //Dado que o usuario acessa a pagina de Login (beforeEach)
        //Quando não preenche o campo de nome
        cadastro_usuario_page.fillEmail(fakerEmail)
        cadastro_usuario_page.fillPassword(user.validPassword)
        cadastro_usuario_page.clickRegister()
        //Então é exibido uma mensagem informativa para preenchemento
        cadastro_usuario_page.checkFillFieldMessage('O campo nome deve ser prenchido')
    })

    it('Validar campo e-mail vazio', () => {
        //Dado que o usuario acessa a pagina de Login (beforeEach)
        //Quando não preenche o campo de email
        cadastro_usuario_page.fillName(fakerName)
        cadastro_usuario_page.fillPassword(user.validPassword)
        cadastro_usuario_page.clickRegister()
        //Então é exibido uma mensagem informativa para preenchemento
        cadastro_usuario_page.checkFillFieldMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {
        //Dado que o usuario acessa a pagina de Login (beforeEach)
        //Quando preenche um e-mail invalido
        cadastro_usuario_page.fillName(fakerName)
        cadastro_usuario_page.fillEmail(user.invalidEmail)
        cadastro_usuario_page.fillPassword(user.validPassword)
        cadastro_usuario_page.clickRegister()
        //Então é exibido uma mensagem informativa para preenchemento correto
        cadastro_usuario_page.checkFillFieldMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo senha vazio', () => {
        //Dado que o usuario acessa a pagina de Login (beforeEach)
        //Quando não preenche o campo de senha
        cadastro_usuario_page.fillName(fakerName)
        cadastro_usuario_page.fillEmail(fakerEmail)
        cadastro_usuario_page.clickRegister()
        //Então é exibido uma mensagem informativa para preenchemento
        cadastro_usuario_page.checkFillFieldMessage('O campo senha deve ter pelo menos 6 dígitos')
    })
    
    it('Validar campo senha inválida', () => {
        //Dado que o usuario acessa a pagina de Login (beforeEach)
        //Quando preenche a senha com menos de 6 digitos
        cadastro_usuario_page.fillName(fakerName)
        cadastro_usuario_page.fillEmail(fakerEmail)
        cadastro_usuario_page.fillPassword	(user.invalidPassword)
        cadastro_usuario_page.clickRegister()
        //Então é exibido uma mensagem informativa para preenchemento correto
        cadastro_usuario_page.checkFillFieldMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar cadastro com sucesso', () => {
        //Dado que o usuario acessa a pagina de Login (beforeEach)
        //Quando preenche todas as informações corretamenta
        cadastro_usuario_page.fillName(fakerName)
        cadastro_usuario_page.fillEmail(fakerEmail)
        cadastro_usuario_page.fillPassword(user.validPassword)
        cadastro_usuario_page.clickRegister()
        //Então é exibido uma mensagem de cadastro realizado
        cadastro_usuario_page.checkSucessMessage('Cadastro realizado!', fakerName)
    })



})

});