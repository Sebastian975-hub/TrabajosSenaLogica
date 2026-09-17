const valorpasaje = parseInt(prompt("Valor del pasaje"));
const numeropasajeros = parseInt(prompt( "numero de pasajeros"));
const numeroMaximoPasajeros = 20;

const valortotal= valorpasaje * numeropasajeros;
   console.log("El valor total de pagar es: " + valortotal);

if (numeropasajeros < numeroMaximoPasajeros) {
    console.log(" Tiene cupo")

} else {
    console.log("No tiene cupo")
}

