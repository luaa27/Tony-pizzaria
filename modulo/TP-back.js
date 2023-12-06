var info = require('../info')
const getCadastro = function (email, senha) {
    let cont = 0
    let jsonDados = {}
    let status = false
    while (cont < info.perfil.user.length) {
        if (email == info.perfil.user[cont].email && senha == info.perfil.user[cont].senha) {
            jsonDados.email = info.perfil.user[cont].email
            jsonDados.senha = info.perfil.user[cont].senha
            status = true
        }
        cont++
    }
    if (status) {
        return jsonDados
    }
    else {
        return false
    }
}
const getProduto = function (nomeProduto) {
    let cont = 0
    let status = false
    let jsonProduto = {}
    while (cont < info.produtos.produto.length) {
        if (nomeProduto == info.produtos.produto[cont].nome) {
            jsonProduto.nome = info.produtos.produto[cont].nome
            jsonProduto.foto = info.produtos.produto[cont].foto
            jsonProduto.preco = info.produtos.produto[cont].preco
            jsonProduto.favorito = info.produtos.produto[cont].favorito
            jsonProduto.descricao = info.produtos.produto[cont].descricao
            jsonProduto.comentarios = info.produtos.produto[cont].comentarios
            status = true
        }
        cont++
    }
    if (status) {
        return jsonProduto
    }
    else {
        return status
    }

}
const getFavoritas = function () {
    let cont = 0
    let status = false
    let arrayProdutos = []
    let jsonProdutos = {}
    while (cont < info.produtos.produto.length) {
        if (info.produtos.produto[cont].favorito == true) {
            let jsonFavoritas = {}
            jsonFavoritas.nome = info.produtos.produto[cont].nome
            jsonFavoritas.foto = info.produtos.produto[cont].foto
            jsonFavoritas.preco = info.produtos.produto[cont].preco
            jsonFavoritas.favorito = info.produtos.produto[cont].favorito
            jsonFavoritas.descricao = info.produtos.produto[cont].descricao
            jsonFavoritas.comentarios = info.produtos.produto[cont].comentarios
            arrayProdutos.push(jsonFavoritas)
            jsonProdutos.favoritas = arrayProdutos
        }
        cont++
        status = true
    }
    if (status) {
        return jsonProdutos
    }
    else {
        return status
    }
}
const getCategoria = function (tipo) {
    let cont = 0
    let status = false
    let arrayProduto = []
    let jsonProduto = {}
    while (cont < info.produtos.produto.length) {
        if (tipo == info.produtos.produto[cont].categoria) {
            let jsonCategorias = {}
            jsonCategorias.nome = info.produtos.produto[cont].nome
            jsonCategorias.foto = info.produtos.produto[cont].foto
            jsonCategorias.preco = info.produtos.produto[cont].preco
            jsonCategorias.categoria = info.produtos.produto[cont].categoria
            jsonCategorias.favorito = info.produtos.produto[cont].favorito
            jsonCategorias.descricao = info.produtos.produto[cont].descricao
            jsonCategorias.comentarios = info.produtos.produto[cont].comentarios
            arrayProduto.push(jsonCategorias)
            jsonProduto.produtos = arrayProduto
            status = true
        }
        cont++
    }
    if (status) {
        return jsonProduto
    }
    else {
        return status
    }

}
module.exports = {
    getCadastro,
    getCategoria,
    getFavoritas,
    getPerfil,
    getProduto
}