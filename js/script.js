const cuentas = {
    mali: {
        nombre: 'Mali',
        saldo: 200,
        password: 123,
    },
    gera: {
        nombre: 'Gera',
        saldo: 290,
        password: 456
    },

    maui: {
        nombre: 'Maui',
        saldo: 67,
        password: 789
    }

}


let geraBox = document.querySelector('#gera')
let maliBox = document.querySelector('#mali')
let mauiBox = document.querySelector('#maui')

// PASS VARIABLES
let geraPass = document.querySelector('#passGera')
let maliPass = document.querySelector('#passMali')
let mauiPass = document.querySelector('#passMaui')

// PASSWORD ANIMATION 
geraBox.onclick = () => {
    geraPass.classList.add('visiblePass')
    maliPass.classList.remove('visiblePass')
    mauiPass.classList.remove('visiblePass')
}

maliBox.onclick = () => {
    geraPass.classList.remove('visiblePass')
    maliPass.classList.add('visiblePass')
    mauiPass.classList.remove('visiblePass')
}

mauiBox.onclick = () => {
    geraPass.classList.remove('visiblePass')
    maliPass.classList.remove('visiblePass')
    mauiPass.classList.add('visiblePass')
}

// Password verification
// Aqui creamos las variables con destructuring para poder compararlas   
const { mali: { password: passMali } } = cuentas
const { gera: { password: passGera } } = cuentas
const { maui: { password: passMaui } } = cuentas

const { mali: { nombre: nameMali } } = cuentas
const { gera: { nombre: nameGera } } = cuentas
const { maui: { nombre: nameMaui } } = cuentas

// Get amount
// Destructuring del objeto para obtener el saldo inicial

const { mali: { saldo: maliSaldo } } = cuentas
const { gera: { saldo: geraSaldo } } = cuentas
const { maui: { saldo: mauiSaldo } } = cuentas

// PASSWORD EVALUATION
function passVerification(userPass, userName) {
    let inputMali = document.querySelector('#maliPass').value
    let inputGera = document.querySelector('#geraPass').value
    let inputMaui = document.querySelector('#mauiPass').value

    if (userPass === passMali && userName === nameMali) {
        window.location = 'cuentas.html'

    }
    if (userPass === passGera && userName === nameGera) {
        window.location = 'cuentas.html'

    }
    if (userPass === passMaui && userName === nameMaui) {
        window.location = 'cuentas.html'
        let getAmount = document.querySelector('#accountAmount')
        getAmount.innerHTML = mauiSaldo
    } else {
        document.querySelector('#message').innerHTML = 'Contraseña incorrecta'
        console.log('Contraseña inválida!!')
    }
}

document.onload
let getAmount = document.querySelector('#accountAmount')
getAmount.innerHTML = geraSaldo


// let getAmount = document.querySelector('#accountAmount')