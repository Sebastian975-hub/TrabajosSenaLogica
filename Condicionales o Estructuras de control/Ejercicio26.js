const NivelInicial = parseInt(prompt("Introduzca el nivel de pelea inicial de Goku:"));


const Aumento = NivelInicial * 3;


const NivelFinal = NivelInicial + Aumento;


if (NivelFinal > 5000) {
    console.log("Aumento de pelea: " + Aumento);
    console.log("Nivel de pelea actual (Final): " + NivelFinal);
}