const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const LeerVentas = (ListaDias) => {

    let ListaVentas = [];
    for (let i = 0; i < ListaDias.length; i++) {

        let venta = parseInt(prompt(`Venta del ${ListaDias[i]}`));
        ListaVentas.push(venta);

    }

    return ListaVentas;

}

const BuscarPosicionMayor = (numero) =>{
    let indiceMayor = 0;
    for(let i = 1 ; i < numero.length ; i++ ){
        if(numero[i] > numero[indiceMayor]){
            indiceMayor = i;
        }
    }
    return indiceMayor;
}

const BuscarPosicionMenor = (numero) => {
  let indiceMenor = 0;
   for( let i = 1 ; i > numero.length ; i++ ){
        if(numero[i] < numero[indiceMenor]){
            indiceMenor = i;
        }
    }
    return indiceMenor;
}
console.log("--- Ejercicio 4 ---");

const misVentas = LeerVentas(dias);

const PosMayor = BuscarPosicionMayor(misVentas);
const PosMenor = BuscarPosicionMenor(misVentas);

const ventaMayor = misVentas[PosMayor];
const ventaMenor = misVentas[PosMenor];
const diferencia = ventaMayor - ventaMenor;

console.log(`Mejor día: ${dias[PosMayor]} ($${ventaMayor})`);
console.log(`Peor día: ${dias[PosMenor]} ($${ventaMenor})`);
console.log(`Diferencia: $${diferencia}`);