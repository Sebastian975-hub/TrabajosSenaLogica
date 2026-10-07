const obtenerEnvioGratis = (distancias) => {
    return distancias.filter(distancia => distancia <= 3);
};

const contarConEnvio = (distancias) => {
    const paganEnvio = distancias.filter(distancia => distancia > 3 && distancia <= 10);
    return paganEnvio.length;
};


const buscarPrimeroFuera = (distancias) => {
    return distancias.find(distancia => distancia > 10);
};



const cantidadPedidos = parseInt(prompt("¿Cuántos pedidos?"));
console.log(`¿Cuántos pedidos? ${cantidadPedidos}`);

let distanciasPedidos = [];
for (let i = 0; i < cantidadPedidos; i++) {
    let distancia = parseFloat(prompt(`Distancia ${i + 1}:`));
    distanciasPedidos.push(distancia);
    console.log(`Distancia ${i + 1}: ${distancia} Km`);
}


const gratis = obtenerEnvioGratis(distanciasPedidos);
const cantidadPagan = contarConEnvio(distanciasPedidos);
const primeroFuera = buscarPrimeroFuera(distanciasPedidos);

// --- MOSTRAR RESULTADOS ---

console.log(`Envío gratis (${gratis.length}): ${gratis.join(", ")}`);
console.log(`Pagan envío: ${cantidadPagan}`);


if (primeroFuera !== undefined) {
    console.log(`Primer pedido fuera de cobertura: ${primeroFuera} km`);
} else {
    console.log("Todos los pedidos están en cobertura");
}