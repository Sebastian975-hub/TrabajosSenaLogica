const tieneDescuento = (Kilos) => {
    return Kilos > 10;
}

const calcularTotalCliente = (Kilos, Preciokilo) =>{
    let subtotal = Kilos * Preciokilo;


if(tieneDescuento(Kilos)){
    return subtotal * 0.85;
}else{
    return subtotal;
}
}

const PrecioKilo = parseFloat(prompt("Ingrese el precio por kilo de naranja:"));

let totalTienda = 0;
let ClienteConDescuento = 0;

for (let i = 1; i <= 15; i++) {
    let kilosCliente = parseFloat(prompt(`Kilos cliente ${i}:`));
    let totalPagar = calcularTotalCliente(kilosCliente, PrecioKilo);

    totalTienda += totalPagar;

    if (tieneDescuento(kilosCliente)) {
        ClienteConDescuento++;
        console.log(`Cliente ${i} paga: ${totalPagar} (con descuento)`);
    } else {
        console.log(`Cliente ${i} paga: ${totalPagar}`);
    }
}
console.log(`Total recaudado: ${totalTienda}`);
console.log(`Clientes con descuento: ${ClienteConDescuento}`);

