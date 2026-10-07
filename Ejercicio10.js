const esPar = (numero) =>{
    return numero % 2 === 0;
}

const filtrarPares = (numeros) =>{
    const pares = [];
    for(let i = 0 ; i < numeros.length ; i++ ){
        if(esPar(numeros[i])){
            pares.push(numeros[i]);
        }
    }
    return pares;
}

const filtrarImpares = (numeros) =>{
    const impares = [];
    for(let i = 0 ; i < numeros.length ; i++ ){
        if(!esPar(numeros[i])){
            impares.push(numeros[i]);
        }
    }
    return impares;
}

const mostrarResultado = (lista) =>{
    if(lista.length === 0){
        return "(ninguno)"
    }
    return lista.join(", ");
}

const numerosEntrada = [];

for(let i = 1 ; i <= 8 ; i++){
    let numero = parseInt(prompt(`Numero ${i}`));
    console.log(`Numero ${i}: ${numero}`);
    numerosEntrada.push(numero);
}

const listaPares = filtrarPares(numerosEntrada);
const listaImpares = filtrarImpares(numerosEntrada);

console.log(`Pares (${listaPares.length}): ` + mostrarResultado(listaPares));
console.log(`Impares (${listaImpares.length}): ` + mostrarResultado(listaImpares));