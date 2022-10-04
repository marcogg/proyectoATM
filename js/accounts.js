window.onload = function getData() {
    if (localStorage.getItem('userName') === nameMali) {
        let getAmount = document.querySelector('#accountAmount')
        let accountGender = document.querySelector('#accountGender')
        accountGender.innerHTML = `a`
        accountName.innerHTML = ` ${cuentas.mali.nombre}`
        getAmount.innerHTML = `${cuentas.mali.saldo}`
    }
    if (localStorage.getItem('userName') === nameGera) {
        let getAmount = document.querySelector('#accountAmount')
        let accountGender = document.querySelector('#accountGender')
        accountGender.innerHTML = `o`
        accountName.innerHTML = ` ${cuentas.gera.nombre}`
        getAmount.innerHTML = `${cuentas.gera.saldo}`
    }
    if (localStorage.getItem('userName') === nameMaui) {
        let getAmount = document.querySelector('#accountAmount')
        let accountGender = document.querySelector('#accountGender')
        accountGender.innerHTML = `a`
        accountName.innerHTML = ` ${cuentas.maui.nombre}`
        getAmount.innerHTML = `${cuentas.maui.saldo}`
    }
}

// ANIMATION APPEAR DEPOSIT FORM
const appearDeposit = () => {
    let getSaving = document.querySelector('#savingForm')
    getSaving.classList.remove('hiddenElement')
    getSaving.classList.add('visibleElement')
}

// ANIMATION APPEAR WITHDRAWAL FORM
const appearWithdrawal = () => {
    let getSaving = document.querySelector('#withdrawalForm')
    getSaving.classList.remove('hiddenElement')
    getSaving.classList.add('visibleElement')
}

// SAVE MONEY
function deposit() {
    let amountDeposit = Number(document.querySelector('#saving').value)
    let saldo = JSON.parse(localStorage.getItem('saldo'))
    if (((saldo + amountDeposit) > 10) && ((saldo + amountDeposit) < 990)) {
        let newSaving = document.querySelector('#accountAmount')
        localStorage.setItem('saldo', `${amountDeposit + saldo}`)
        return newSaving.innerHTML = amountDeposit + saldo

    } else {
        document.getElementById('errorAccount').innerHTML = 'Monto no válido, debes tener al menos $10 en tu cuenta y máximo $990'
    }
}

// WITHDRAW MONEY
function withdrawal() {
    let amountWithdrawal = Number(document.querySelector('#withdrawal').value)
    let saldoRetiro = JSON.parse(localStorage.getItem('saldo'))
    if (((saldoRetiro - amountWithdrawal) > 10) && ((saldoRetiro - amountWithdrawal) < 990)) {
        let newWithdrawal = document.querySelector('#accountAmount')
        localStorage.setItem('saldo', `${saldoRetiro - amountWithdrawal}`)
        return newWithdrawal.innerHTML = (saldoRetiro - amountWithdrawal)

    } else {
        document.getElementById('errorAccount').innerHTML = 'Monto no válido, debes tener al menos $10 en tu cuenta y máximo $990'
    }
}