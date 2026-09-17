const PesoQueso = parseInt(prompt("Digite el Peso del Queso"));
const PesoRaton = parseInt(prompt("Digite el Peso del Raton"))
let PedasoComido =  PesoQueso * 0.40;
const PesoActualQueso = PesoQueso - PedasoComido;

let AumentoPesoRaton = PesoRaton * 0.011;
const PesoActualRaton = PesoRaton + AumentoPesoRaton;

if((PesoActualRaton * 0.20) < PesoActualQueso ){
    console.log("Peso Actual del Queso: " + PesoActualQueso);
    console.log("Peso Actual del Raton: " + PesoActualRaton);
}