let ValorDeComputadora = 11000;
let Computadoras = 0;
let CantidadDeComputadoras = (parseInt(prompt("Cuantas computadoras va a comprar?")));
let ValorFinal = CantidadDeComputadoras * ValorDeComputadora;

if (Computadoras < 5) {
    let descuento = ValorFinal * 0.10;
     ValorConDescuento = ValorFinal - descuento;
} else if (Computadoras >= 5 && Computadoras < 10){
    let descuento = ValorFinal * 0.20;
     ValorConDescuento = ValorFinal - descuento;
}else if( Computadoras >=10){
    let descuento = ValorFinal * 0.40;
    ValorConDescuento = ValorFinal - descuento;
}
console.log("El valor final de las computadoras son: " + ValorConDescuento);