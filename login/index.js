'use strict'

const botComecar = document.getElementById('comecar')
const botEntrar = document.getElementById('entrar')

const mostrarLogin = () => {

    const title = document.getElementById('title')
    const subtitle = document.getElementById('subtitle')
    const loginContainer = document.getElementById('login')

    title.innerHTML ='Acesse sua <br> conta'
    subtitle.textContent ="O que você está esperando para saborear as mais deliciosas pizzas e sobremesas da região?"

    loginContainer.classList.add('show')
    loginContainer.classList.add('remove')

    botComecar.classList.add('hide')
}
botComecar.addEventListener('click', mostrarLogin)

const logar = () => {

    let login = document.getElementById('email').value
    let senha = document.getElementById('senha').value

        window.location.assign('../home/home.html')
}

botEntrar.addEventListener('click', logar)