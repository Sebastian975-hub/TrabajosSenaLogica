const contarClaves = (objeto) =>{
    let contador = 0;
    for(let materia in objeto){
        contador++;
    }
    return contador;
}

const contarPalabras = (frase) =>{
    let contadorObj = {};

    let palabras = frase.toLowerCase().split(" ");

    for(let i = 0; i < palabras.length ; i++){
        let palabra = palabras[i]

        if(palabra in contadorObj){
            contadorObj[palabra]++;
        }else{
            contadorObj[palabra] = 1;
        }
        
    }
    return contadorObj;
}

const buscarClaveMayor = (objeto) =>{
    let maximo = -1;
    let palabraMasRepetida = "";

    for(let clave in objeto){
        if(objeto[clave] > maximo){
            maximo = objeto[clave];
            palabraMasRepetida = clave;
        }
    }
    return palabraMasRepetida;
}

let fraseInput = prompt("Frase:");
if(fraseInput !== null && fraseInput !== "" ){
    let resultadoConteo = contarPalabras(fraseInput);

    for(let clave in resultadoConteo){
        console.log(`${clave}: ${resultadoConteo[clave]}`);
    }

    let distintas = contarClaves(resultadoConteo);
    let masRepetida = buscarClaveMayor(resultadoConteo);
    let veces = resultadoConteo[masRepetida];

    console.log("Palabras distintas: " + distintas);
    console.log(`Más repetida: ${masRepetida} (${veces} veces)`);

}