
const salarioBasico = parseInt(prompt("introduce el salario Basico"))


let auxilioAlimentacion = 0;
let subsidioTransporte = 0;


if (salarioBasico < 300000) {
    auxilioAlimentacion = salarioBasico * 0.01; // 1%
    subsidioTransporte = 45000;
} else {
    auxilioAlimentacion = 0;
    subsidioTransporte = 25000;
}


const totalDevengado = salarioBasico + auxilioAlimentacion + subsidioTransporte;

const deduccionSalud = salarioBasico * 0.015;       // 1.5%
const deduccionPension = salarioBasico * 0.281;     // 28.1%
const aportesParafiscales = salarioBasico * 0.0055; // 0.55%

const totalDeducciones = deduccionSalud + deduccionPension + aportesParafiscales;

const salarioNetoInicial = totalDevengado - totalDeducciones;

const donacionCatastrofe = salarioNetoInicial * 0.0005; // 0.05%

const salarioNetoFinal = salarioNetoInicial - donacionCatastrofe;


console.log("Salario Basico: " + salarioBasico);
console.log("Auxilio de Alimentacion: " + auxilioAlimentacion);
console.log("Subsidio de Transporte: " + subsidioTransporte);
console.log("Deduccion Salud (1.5%): " + deduccionSalud);
console.log("Deduccion Pension (28.1%): " + deduccionPension);
console.log("Aportes Parafiscales (0.55%): " + aportesParafiscales);
console.log("Donacion por Catastrofe (0.05%): " + donacionCatastrofe);
console.log("SALARIO NETO A PAGAR: " + salarioNetoFinal);