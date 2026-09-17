const salario = parseInt(prompt("introduzca su salario"));

const retencion = salario * 0.25;
const salarioRetencion = salario - retencion;

const salarioMinimo = 1430000

if(salarioRetencion > 1430000){
    console.log("Gana mas del minimo");
}else if(salarioRetencion < 1430000){
    console.log("Gana Menos del Minimo");
}else if(salarioRetencion ==1430000){
    console.log("Gana el salario minimo");
}