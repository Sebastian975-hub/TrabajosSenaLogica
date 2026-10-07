const rotarDerecha = (lista, k) => {
    const n = lista.length;
    const filaRotada = new Array(n);
    
    
    if (n === 0) return filaRotada;

    for (let i = 0; i < n; i++) {
      
        let nuevaPosicion = (i + k) % n;
        filaRotada[nuevaPosicion] = lista[i];
    }
    
    return filaRotada;
};


const ejecutarPrograma = () => {
    
    let cantPersonas = parseInt(prompt("¿Cuántas personas?"));
    console.log(`¿Cuantas personas? ${cantPersonas}`);
    const filaOriginal = [];
    
  
    for (let i = 1; i <= cantPersonas; i++) {
        let nombre = prompt(`Persona ${i}:`);
        console.log(`Persona  ${i}: ${nombre}`)
        filaOriginal.push(nombre);
    }
    
    
    let k = parseInt(prompt("¿Cuántas posiciones rotar?"));
    
    
    const filaRotada = rotarDerecha(filaOriginal, k);
    
    
    console.log("Fila original: " + filaOriginal.join(", "));
    console.log("Fila rotada: " + filaRotada.join(", "));
};


ejecutarPrograma();