const contarDivisores = (numero) => {
    let divisores = 0;
    
  
    for (let d = 1; d <= numero; d++) {
       if (numero % d === 0) {
           divisores++;
        }
    }
    return divisores;
};


const esPrimo = (numero) => {
  
    return contarDivisores(numero) === 2;
};


let limiteN = parseInt(prompt("Límite:"));
let contadorPrimos = 0;


console.log(`Limite : ${limiteN}`)
for (let i = 2; i <= limiteN; i++) {


    if (esPrimo(i)) {
        console.log(i);
        contadorPrimos++; 
    }
}


console.log(`Cantidad de primos: ${contadorPrimos}`);    
