
const existeEnLista = (lista, valor) => {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            return true;
        }
    }
    return false; 
};


const eliminarRepetidos = (numeros) => {
    const sinRepetidos = [];
    
    for (let i = 0; i < numeros.length; i++) {
    
        if (!existeEnLista(sinRepetidos, numeros[i])) {
            sinRepetidos.push(numeros[i]);
        }
    }
    
    return sinRepetidos;
};


const ejecutarPrograma = () => {
    const datosCompletos = [];
    
   
    for (let i = 1; i <= 10; i++) {
        let entrada = prompt(`Número ${i}:`);
        
     console.log(`Numero ${i}: ${entrada}`)
        let numero = parseInt(entrada); 
        datosCompletos.push(numero);
    }
    

    const unicos = eliminarRepetidos(datosCompletos);
    const repetidosEliminados = datosCompletos.length - unicos.length;
    
   
    console.log("Datos completos: " + datosCompletos.join(", "));
    console.log("Sin repetidos: " + unicos.join(", "));
    console.log(`Se eliminaron ${repetidosEliminados} repetidos`);
};


ejecutarPrograma();
    