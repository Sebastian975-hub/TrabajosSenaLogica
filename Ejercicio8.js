const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const LeerVentas = (listaDias) => {
    let ListaVentas = [];
    for (let i = 0; i < listaDias.length; i++) {
        let venta = parseInt(prompt(`Venta del ${listaDias[i]}:`));
        console.log(`Venta del ${listaDias[i]}: ${venta}`);
        ListaVentas.push(venta);

    }
       return ListaVentas;
    }

    const CalcularTotal = (numeros) =>{
        let suma = 0;
        for(let i = 0 ; i <numeros.length ; i++ ){
            suma += numeros[i];
        }
        return suma;
    } 


   
const contarMayoresQue = (numeros, limite) => {
    let contador = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > limite) {
            contador++;
        }
    }
    return contador;
}


const mostrarDiasSobre = (listaDias, listaVentas, limite) => {
    for (let i = 0; i < listaVentas.length; i++) {
        
        if (listaVentas[i] > limite) {
            console.log(`${listaDias[i]}: $${listaVentas[i]}`);
        }
    }
}



const misVenta = LeerVentas(dias);

const totalSemana = CalcularTotal(misVenta);
const promedioDiario = Math.round(totalSemana / dias.length);

console.log(`Promedio diario: $${promedioDiario}`);
console.log("Dias por encima del promedio:");


mostrarDiasSobre(dias, misVenta, promedioDiario);

const totalDias = contarMayoresQue(misVenta, promedioDiario);
console.log(`Total: ${totalDias} dias`);