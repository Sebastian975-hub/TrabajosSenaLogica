let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
let items = {};

while (true) {
    let prodInput = prompt("Producto: ");
    console.log(`Producto: ${prodInput}`)

    if (prodInput === null || prodInput.toLowerCase() === "fin") {
        break;
    }

    let producto = prodInput.toLowerCase();

    if (producto in precios) {
        let cantidad = parseInt(prompt("Cantidad:"));
        console.log(`Cantidad: `)

        if (producto in items) {
            items[producto] = items[producto] + cantidad;
        } else {
            items[producto] = cantidad;
        }
    } else {
        console.log(`${producto} no está en el menú`);
    }
}

console.log("Detalle:");
let subtotal = 0;

for (let prod in items) {
    let cantidad = items[prod];
    let precioUnitario = precios[prod];
    let costoTotalProducto = cantidad * precioUnitario;

    console.log(`${prod} x${cantidad} = $${costoTotalProducto}`);
    subtotal = subtotal + costoTotalProducto;
}

let domicilio = 0;
if (subtotal < 20000) {
    domicilio = 3000;
} else {
    domicilio = 0;
}

let total = subtotal + domicilio;

console.log("Subtotal: \$" + subtotal);
console.log("Domicilio: \$" + domicilio);
console.log("Total: \$" + total);