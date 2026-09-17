const PesoVehiculo = parseInt(prompt("Digitar el Peso del Vehiculo en Toneladas"));

const PesoReduccion = (PesoVehiculo * 15) / 100;

const PesoActualToneladas = PesoVehiculo - PesoReduccion;
const unKilo = 1000;
const unGramo = 1000000;

let PesoActualGramos = (PesoActualToneladas * unGramo);
let PesoActualKilos = (PesoActualToneladas * unKilo);



if(PesoReduccion > 3.5 ){
    console.log("El vehiculo quedo liviano");
}




console.log("Peso del Vehiculo: " + PesoVehiculo);
console.log("Peso de la Reduccion: " + PesoReduccion);
console.log("Peso Actual Despues de la Reduccion: " + PesoActualToneladas);
console.log("Peso Actual en Kilos: " + PesoActualKilos);
console.log("Peso Actual en Gramos: " + PesoActualGramos);