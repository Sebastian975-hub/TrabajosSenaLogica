
const A = parseInt(prompt("Digite el rango inicial A:"));
const B = parseInt(prompt("Digite el rango final B:"));


if (A > B) {
    console.log("Error");
} else {

    const numero = parseInt(prompt("Digite el numero a evaluar:"));


if (numero >= 10 && numero <= 50) {
    console.log("Comprendido");
} else {
    console.log("No es comprendido");
}

}