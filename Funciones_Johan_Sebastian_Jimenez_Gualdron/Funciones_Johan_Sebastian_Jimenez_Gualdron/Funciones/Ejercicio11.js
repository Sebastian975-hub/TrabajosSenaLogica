const generarNumeroSecreto = (minimo, maximo) => {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

const EvaluarIntento = (intento, secreto) => {
    if (intento > secreto) {
        return "Mayor";
    } else if (intento < secreto) {
        return "Menor";
    } else {
        return "Correcto";
    }
}

let numeroSecreto = generarNumeroSecreto(1, 100);

console.log(`(número secreto: ${numeroSecreto})`);

let contador = 1;
let adivina = false;

while (contador <= 7 && !adivina) {

    let IntentoUsuario = prompt(`Digite el intento numero ${contador} al azar`);

    console.log(` Intento ${contador}: ${IntentoUsuario}`);

    let resultado = EvaluarIntento(IntentoUsuario, numeroSecreto);

    if (resultado === "Correcto") {
        adivina = true; 
    } else if (resultado === "Mayor") {
        console.log("El número secreto es menor");
        contador++;
    } else {
        console.log("El número secreto es mayor");
        contador++;
    }
}
if (adivina) {

    console.log(`¡Adivinaste en ${contador} intentos!`);
} else {
    console.log(`Perdiste. El número secreto era ${numeroSecreto}`);
}