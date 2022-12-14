/* 
Crear dos funciones llamadas 'operación' y 'operaciones'. 

'operación' recibirá dos números y un string con el nombre de la operación a efectuar entre ellos: 'suma' ó 'resta' y cargará dinámicamente un módulo para realizar dicho cálculo. 

'operaciones' llamará a 'operacion' con los casos de prueba. 
'operacion' deberá devolver el resultado a operaciones a través de una promesa.

Los cálculos habilitados estarán definidos en archivos separados empleado clases donde los argumentos de entrada se guardarán en propiedades instancia privadas (#) y tendrán un método 'resultado' que hará efectiva la operación. 

Este debe ser un proyecto que utilice typescript, async await, funciones flecha y tipado en todos sus módulos.
*/

async function operacion(a:number,b:number,operacion:string) {
    let resultado = 0
    let modulo

    switch(operacion) {
        case 'suma':
            modulo = await import('./suma')
            let suma = new modulo.Suma(a,b)
            resultado = suma.resultado()
            return Promise.resolve(resultado)

        case 'resta':
            modulo = await import('./resta')
            let resta = new modulo.Resta(a,b)
            resultado = resta.resultado()
            return Promise.resolve(resultado)
    }
}

async function operaciones() {
    console.log(await operacion(16,6,'suma'))
    console.log(await operacion(16,6,'resta'))
}
operaciones()
