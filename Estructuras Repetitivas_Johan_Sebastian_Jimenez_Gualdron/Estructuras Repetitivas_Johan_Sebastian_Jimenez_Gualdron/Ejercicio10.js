
let iva = 0.16;


for (let i = 1; i <= 3; i++) {


    let precio = parseFloat(prompt(`Ingrese el precio del aparato ${i}`));
    let marca = prompt(`Ingrese la marca del aparato ${i}`);

    let descuento = 0;

    let cantidadDescuento = precio * descuento;
    let precioConDescuento = precio - cantidadDescuento;
    let totalConIVA = precioConDescuento * (1 + iva);

    if (precio >= 2000) {
        descuento = 0.10;

    }else if(marca === "NOSY" || marca === "nosy") {
        descuento = descuento + 0.05;

    }
    console.log(`Aparato ${i} Total a pagar con IVA: ${totalConIVA}`);
}