
const CapitalInicial = parseInt(prompt(`Ingrese su capital inicial`));
const  NumeroMeses = parseInt(prompt("Ingrese el numero de meses que va a invertir"))

const Interes = (saldo,porcentaje)=> saldo * (porcentaje /100);

let  saldo = CapitalInicial;

console.log(`El capital inicial es : ${CapitalInicial}`);
console.log(`Numero de meses : ${NumeroMeses}`);
for (let i = 1; i <= NumeroMeses; i++) {

    let interesMes= Interes(saldo, 2);

    saldo += interesMes;

    console.log(`Mes ${i}: ${saldo}`);
}

let gananciaTotal = saldo - CapitalInicial;

console.log(`Ganancia total: ${gananciaTotal}`);