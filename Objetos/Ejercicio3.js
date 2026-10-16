let producto = { nombre: "Morral", precio: 85000, stock: 12 };

const aplicarDescuento = (prod, porcentaje) => {
    let descuento = prod.precio * (porcentaje / 100);
    let nuevoPrecio = prod.precio - descuento;

    let oferta = {
        ...prod,
        precio: nuevoPrecio,
        precioAnterior: prod.precio
    };

    return oferta;
}

const mostrarProducto = (prod) => {
    if ("precioAnterior" in prod) {
        console.log(`En oferta: ${prod.nombre} - $${prod.precio} (antes $${prod.precioAnterior}) - ${prod.stock} unidades`);
    } else {
        console.log(`Original: ${prod.nombre} - $${prod.precio} - ${prod.stock} unidades`);
    }
}

let porcentajeInput = parseInt(prompt("Porcentaje de descuento:"));
console.log(`Porcentaje de descuento: ${porcentajeInput}`);
let productoEnOferta = aplicarDescuento(producto, porcentajeInput);

mostrarProducto(producto);
mostrarProducto(productoEnOferta);