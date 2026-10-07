const invertir = (lista) => {
    const nuevoArray = [];

    for (let i = lista.length - 1; i >= 0; i--) {
        nuevoArray.push(lista[i]);
    }
    return nuevoArray;
}

 const UnirConComas = (lista) => {
    let resultado = "";
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];

        if (i < lista.length - 1) {
            resultado += ", ";
        }
    
    }
        return resultado;
}


  let cantidad = parseInt(prompt("¿Cuantas palabras?"));
 console.log(`¿Cuantas palabras? ${cantidad}`);
  let palabrasOriginales = [];

 for(let i = 1 ; i <= cantidad ; i++ ){
    let palabra = prompt(`Palabra ${i}:`);
    console.log(`Palabra ${i}: ${palabra}.`)
    palabrasOriginales.push(palabra);

 }

 let palabrasInvertidas = invertir(palabrasOriginales);

 console.log("Original: " + UnirConComas(palabrasOriginales));
 console.log("Invertido: " + UnirConComas(palabrasInvertidas));