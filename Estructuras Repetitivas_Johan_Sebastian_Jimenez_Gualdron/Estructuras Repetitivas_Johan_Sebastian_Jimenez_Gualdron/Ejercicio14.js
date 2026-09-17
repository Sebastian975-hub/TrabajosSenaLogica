const cantidadMicrobuses = parseInt(prompt("¿Cuántos microbuses vas a registrar?"));

for (let i = 1; i <= cantidadMicrobuses; i++) {
    console.log(`--- Microbús ${i} ---`);
    

    let valorPasaje = parseFloat(prompt(`Microbús ${i} - Ingrese el valor del pasaje ($):`));
    let numeroPasajeros = parseInt(prompt(`Microbús ${i} - Ingrese el número de pasajeros:`));


    let totalPagar = valorPasaje * numeroPasajeros;


    console.log(`Pasaje: $${valorPasaje} | Pasajeros: ${numeroPasajeros}`);
    console.log(`El valor total a pagar por el Microbús ${i} es: $${totalPagar}`);
}