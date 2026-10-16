
let codigos = { bogota: "BOG", medellin: "MDE", bucaramanga: "BGA", cali: "CLO" };
let zonas = { centro: "A", laPlaya: "B", pabloVI: "A" };


const invertir = (objeto) => {
    let objetoInvertido = {};
    let llaves = Object.keys(objeto);

    llaves.forEach((ciudad) => {
        let codigo = objeto[ciudad];
        objetoInvertido[codigo] = ciudad; 
    });

    return objetoInvertido;
}


const invertirAgrupando = (objeto) => {
    let objetoAgrupado = {};
    let llaves = Object.keys(objeto);

    llaves.forEach((barrio) => {
        let zona = objeto[barrio];

        if (zona in objetoAgrupado) {
            objetoAgrupado[zona].push(barrio);
        } else {
            objetoAgrupado[zona] = [barrio];
        }
    });

    return objetoAgrupado;
}


const unirConComas = (lista) => {
    return lista.join(", ");
}


let codigosInvertidos = invertir(codigos); 

while (true) {
    let entrada = prompt("Código:");

    if (entrada === null || entrada.toLowerCase() === "fin") {
        break;
    }

    let codigoBuscado = entrada.toUpperCase(); 

    if (codigoBuscado in codigosInvertidos) {
        console.log(`${codigoBuscado}: ${codigosInvertidos[codigoBuscado]}`);
    } else {
        console.log(`No hay ciudad con el código ${codigoBuscado}`);
    }
}

console.log("Zonas agrupadas:");
let zonasInvertidas = invertirAgrupando(zonas);

Object.keys(zonasInvertidas).forEach((zona) => {
    console.log(`${zona}: ${unirConComas(zonasInvertidas[zona])}`);
});