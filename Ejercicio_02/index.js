/* 
Realizar una función que reciba un objeto, y muestre cada dos segundos sus claves y valores en este formato: [clave, valor]. El proceso no debe ser bloqueante. Utilizar las nuevas funciones de ES8: entries, async await 
*/

const delay2s = () => new Promise(resolve => {
    let refTimer = setInterval(() => resolve(refTimer),2000)
})

async function mostrarClaveValor(obj) {
    //console.log(Object.values(obj))
    let entries = Object.entries(obj)
    for(let entrie of entries) {
        console.log(entrie)
        let refTimer = await delay2s()
        clearInterval(refTimer)
    }
}

console.log('Principio')
mostrarClaveValor({nombre:'Daniel', apellido:'Sanchez', edad: 51})
console.log('Fin')



