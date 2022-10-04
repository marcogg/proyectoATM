// BOX VARIABLES
let geraBox = document.querySelector('#gera')
let maliBox = document.querySelector('#mali')
let mauiBox = document.querySelector('#maui')

// PASS VARIABLES
let geraPass = document.querySelector('#passGera')
let maliPass = document.querySelector('#passMali')
let mauiPass = document.querySelector('#passMaui')

// PASSWORD ANIMATION 
maliBox.onclick = () => {
    geraPass.classList.remove('visiblePass')
    maliPass.classList.add('visiblePass')
    mauiPass.classList.remove('visiblePass')
}

geraBox.onclick = () => {
    geraPass.classList.add('visiblePass')
    maliPass.classList.remove('visiblePass')
    mauiPass.classList.remove('visiblePass')
}


mauiBox.onclick = () => {
    geraPass.classList.remove('visiblePass')
    maliPass.classList.remove('visiblePass')
    mauiPass.classList.add('visiblePass')
}

// PASSWORD EVALUATION
function passVerification(userPass, userName) {
    // let inputMali = document.querySelector('#maliPass').value
    // let inputGera = document.querySelector('#geraPass').value
    // let inputMaui = document.querySelector('#mauiPass').value

    if (userPass === passMali && userName === nameMali) {
        let nombreStoredMali = localStorage.setItem("userName", "Mali")
        let amountStoredMali = localStorage.setItem("saldo", maliSaldo)
        window.location = 'cuentas.html'

    }
    if (userPass === passGera && userName === nameGera) {
        localStorage.setItem("userName", "Gera")
        let amountStoredMali = localStorage.setItem("saldo", geraSaldo)
        window.location = 'cuentas.html'

    }
    if (userPass === passMaui && userName === nameMaui) {
        localStorage.setItem("userName", "Maui")
        let amountStoredMali = localStorage.setItem("saldo", mauiSaldo)
        window.location = 'cuentas.html'
    } else {
        document.querySelector('#message').innerHTML = 'Contraseña incorrecta'
        console.log('Contraseña inválida!!')
    }
}