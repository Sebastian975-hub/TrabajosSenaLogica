const numeroLlantas = parseInt(prompt("Digite la cantidad de llantas"));
const valorLlanta = parseInt(prompt("valor de la llanta"));
let descuento = 0;

if (numeroLlantas <= 10) {
    valorTotalLlanta = (numeroLlantas * 0.8) * valorLlanta;
    console.log(valorTotalLlanta);
} else if (numeroLlantas >= 11) {
    valorTotalLlanta = (numeroLlantas * 0.5) * valorLlanta;
    console.log(valorTotalLlanta);
} else {
    valorTotalLlanta = (numeroLlantas * valorLlanta);
    console.log(valorTotalLlanta);
}
