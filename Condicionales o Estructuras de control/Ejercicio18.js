const activo = parseInt(prompt("introduzca su activo"));
const Pasivo = parseInt(prompt("introduzca su pasivo"));

const Patrimonio = activo - Pasivo;

console.log("El Patrimonio Actual es: " + Patrimonio);

if(Patrimonio == 0){
    console.log("La Empresa Tiene Saldo en Cero.");
}else if(Patrimonio < 0){
    console.log("La Empresa Tiene Perdida");
}else {
    console.log("La Empresa Tiene Algunas Ganacias.");
}