let continuar = prompt("¿Desea registrar un atleta? (si / no):").toLowerCase();
let contadorAtletas = 1;

while (continuar === "si") {
    console.log(`--- Atleta ${contadorAtletas} ---`);

    // Solicitamos las tres distancias recorridas por el atleta actual
    let dist1 = parseFloat(prompt(`Atleta ${contadorAtletas} - Ingrese la distancia 1:`));
    let dist2 = parseFloat(prompt(`Atleta ${contadorAtletas} - Ingrese la distancia 2:`));
    let dist3 = parseFloat(prompt(`Atleta ${contadorAtletas} - Ingrese la distancia 3:`));

    
    let promedioDistancia = (dist1 + dist2 + dist3) / 3;

    // Mostramos los resultados en la consola
    console.log(`Distancias: ${dist1}, ${dist2}, ${dist3}`);
    console.log(`La distancia promedio del atleta ${contadorAtletas} es: ${promedioDistancia.toFixed(2)}`);


    contadorAtletas++;


    continuar = prompt("¿Desea registrar otro atleta? (si / no):").toLowerCase();
}

