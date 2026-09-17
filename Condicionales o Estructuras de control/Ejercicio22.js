const ValorInicial = parseInt(prompt("Introduzca su Valor Inicial"));

const Ventas = 800000 * 4;
const DineroEnCaja = ValorInicial + Ventas;
const Acreedores = DineroEnCaja * 0.10;

const DineroFinal = DineroEnCaja - Acreedores;
 
console.log("Dinero Inicial: " + ValorInicial);
console.log("Dinero Final: " + DineroFinal);
console.log("Pago a los Acreedores: " + Acreedores);

if(Acreedores > 50000){
    console.log("Pago mas de 50.000");
} else {
    console.log("No pago mas de 50.000");
}