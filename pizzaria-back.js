/*************************************************************************
 * Objetivo: Criação de uma API para manipular dados do site Tony-Pizzaria
 * Data: 06/12/23
 * Autor: Luana Santos
 * Versão: 1.0
*************************************************************************/

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})
app.get('/produtos/favoritos', cors(), async function (request, response, next) {
    let funcoes = require('./modulo/tony_pizzaria')
    let listaFavoritos = funcoes.getFavoritas();

    if (listaFavoritos) {
        response.json(listaFavoritos)
        response.status(200)
    }
    else {
        response.status(404);
    }
})
app.get('/perfil/usuario/:email', cors(), async function (request, response, next) {

    let entrada = request.params.email
    let funcoes = require('./modulo/tony_pizzaria.js')
    let dadosPerfil = funcoes.getPerfil(entrada)

    if (dadosPerfil) {
        response.json(dadosPerfil)
        response.status(200)
    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})
app.get('/produtos/:produto', cors(), async function (request, response, next) {

    let entrada = request.params.produto
    let funcoes = require('./modulo/tony_pizzaria.js')
    let dados = funcoes.getProduto(entrada)

    if (dados) {
        response.json(dados)
        response.status(200)
    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})
app.get('/produtos/categoria/:categoria', cors(), async function (request, response, next) {
    console.log("teste");

    let entrada = request.params.categoria
    let funcoes = require('./modulo/tony_pizzaria.js')
    let dados = funcoes.getCategoria(entrada)

    console.log(dados);
    if (dados) {
        response.json(dados)
        response.status(200)
    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})
app.listen('8080', function () {
    console.log('API funcionando!')
})
