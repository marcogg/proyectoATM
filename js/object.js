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