const clasificarNumero = (numero) => {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

const contarNumeros = (cantidad) => {
   
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    for (let i = 1; i <= cantidad; i++) {
        let numero = parseInt(prompt(`Número ${i}:`));

     
        let clasificacion = clasificarNumero(numero);

        
        if (clasificacion === "positivo") {
            positivos++;
        } else if (clasificacion === "negativo") {
            negativos++;
        } else {
            ceros++;
        }
    }

    console.log(`Positivos: ${positivos}`);
    console.log(`Negativos: ${negativos}`);
    console.log(`Ceros: ${ceros}`);
}
contarNumeros(20);