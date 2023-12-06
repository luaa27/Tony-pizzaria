'use strict'

const botCriar = document.getElementById('criar-conta')


const mudarPerfil = () => {

    const inputIcon = document.getElementById('add-img')
    const icon = document.getElementById('icon')

    let iconImage

    inputIcon.addEventListener('change', (e) => {

        const inputTarget = e.target
        const file = inputTarget.files[0]

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file)
            reader.addEventListener('load', (e) => {
                const readerTarget = e.target

                iconImage = readerTarget.result

                console.log(iconImage)

                icon.style.backgroundImage = `url(${iconImage})`
            })
        }
    })

    return iconImage
}

const criarConta = () => {

    const emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const senhaConfirmada = document.getElementById('confirma-senha').value
    const telefone = document.getElementById('telefone').value
    const icon = mudarPerfil()

    if (nome == "" || email == "" || senha == "" || senhaConfirmada == "" || telefone == "") {
    } else if (senha != senhaConfirmada) {
        alert("As senhas não são iguais")
    } else {
        alert("Conta criada, voltando para a página de login")
        window.location.assign("../index.html")
    }

    return status

}

mudarPerfil()
botCriar.addEventListener('click', criarConta)