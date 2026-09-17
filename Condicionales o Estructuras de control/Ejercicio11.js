const PesoKilogramos = parseInt(prompt("Introduce el peso de la Fruta en Kilos"));
let PesoGramos = 0;
let PesoOnzas = 0;

const unKilo = 1000;
const unaOnza = 35.274;

if (PesoKilogramos < 5) {
    PesoGramos = PesoKilogramos * unKilo;
    console.log("Peso en Gramos: " + PesoGramos);
} else{
    if (PesoKilogramos > 5)
    PesoOnzas = PesoKilogramos * unaOnza;
    console.log("Peso en Onzas: " + PesoOnzas);
} 




