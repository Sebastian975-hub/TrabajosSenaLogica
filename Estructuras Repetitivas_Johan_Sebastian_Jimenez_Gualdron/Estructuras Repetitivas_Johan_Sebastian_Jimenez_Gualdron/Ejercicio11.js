const N = parseInt(prompt("¿A cuántas personas deseas comprar manzanas?"));
const PrecioKilo = parseFloat(prompt("¿Cuánto vale el kilo de manzana?")); 

for (let i = 1; i <= N; i++) {
    let Kiloscomprados = parseFloat(prompt(`¿Cuántos Kilos va a comprar el cliente ${i}?`));
    let descuento = 0;

    // Determinamos el porcentaje de descuento según la tabla
    if (Kiloscomprados <= 2) {
        descuento = 0.0;
    } else if (Kiloscomprados <= 5) {
        descuento = 0.10;
    } else if (Kiloscomprados <= 10) {
        descuento = 0.15;
    } else {
        descuento = 0.20;
    }

    let precioTotalSinDescuento = Kiloscomprados * PrecioKilo;
    let valorDescuento = precioTotalSinDescuento * descuento;
    let PrecioFinal = precioTotalSinDescuento - valorDescuento;

    // Mostramos el resultado de cada cliente
    console.log(`El cliente ${i} compró ${Kiloscomprados} kg y tiene que pagar $${PrecioFinal.toFixed(2)} (Ahorró: $${valorDescuento.toFixed(2)})`);
}