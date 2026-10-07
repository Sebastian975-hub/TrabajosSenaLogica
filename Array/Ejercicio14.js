
const calcularConIva = (precio) => {
    return Math.round(precio * 1.19);
};


const aplicarIvaConMap = (precios) => {
    return precios.map(calcularConIva);
};

const aplicarIvaConFor = (precios) => {
    let preciosConIva = [];
    for (let i = 0; i < precios.length; i++) {
        preciosConIva.push(calcularConIva(precios[i]));
    }
    return preciosConIva;
};


const calcularTotal = (numeros) => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
};


const cantidadProductos = parseInt(prompt("¿Cuántos productos?"));
console.log(`¿Cuántos productos? ${cantidadProductos}`);


let preciosSinIva = [];
for (let i = 0; i < cantidadProductos; i++) {
    let precio = parseInt(prompt(`Precio ${i + 1}:`));
    preciosSinIva.push(precio);
    console.log(`Precio ${i + 1}: ${precio}`);
}


const preciosConIvaMap = aplicarIvaConMap(preciosSinIva);
const preciosConIvaFor = aplicarIvaConFor(preciosSinIva);


const totalConIva = calcularTotal(preciosConIvaMap);


console.log(`Sin IVA: ${preciosSinIva.join(", ")}`);
console.log(`Con IVA: ${preciosConIvaMap.join(", ")}`); 
console.log(`Total con IVA: $${totalConIva}`);