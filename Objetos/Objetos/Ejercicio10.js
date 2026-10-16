
let pedido = {
    cliente: "Ana",
    total: 30000,
    entrega: { barrio: "Centro", hora: "7:00pm" }
};

let copia1 = pedido;

copia1.total = 45000;
let copia2 = {
    cliente: pedido.cliente, total: pedido.total, entrega: pedido.entrega
};
copia2.cliente = "Luis";
copia2.entrega.barrio = "La Playa";
console.log(pedido.total, pedido.cliente, pedido.entrega.barrio);

const clonarEntrega = (entrega) => {
    let copia = {
        barrio: entrega.barrio,
        hora: entrega.hora
    };
    return copia;
}

const clonarPedido = (pedidoOriginal) => {
    let copiaGrande = {
        cliente: pedidoOriginal.cliente,
        total: pedidoOriginal.total,
        entrega: clonarEntrega(pedidoOriginal.entrega)
    };
    return copiaGrande;
}

console.log("--- Salida de la Parte B ---");

let pedidoOriginal = { 
    cliente: "Ana", 
    total: 30000, 
    entrega: { barrio: "Centro", hora: "7:00 pm" } 
};

let pedidoClonado = clonarPedido(pedidoOriginal);

pedidoClonado.entrega.barrio = "La Playa";


console.log("Barrio del original: " + pedidoOriginal.entrega.barrio);
console.log("Barrio de la copia: " + pedidoClonado.entrega.barrio);