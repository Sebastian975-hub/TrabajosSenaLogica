const VelocidadAnterior = parseFloat(prompt("Digite la velocidad de Internet anterior:"));
const TieneBandaAncha = prompt("¿El computador tiene banda ancha? (si/no)").toLowerCase();

let Incremento = 0;


if (TieneBandaAncha === "si") {
   
    Incremento = VelocidadAnterior * 2.3;
} else {
 
    Incremento = 0;
}

const VelocidadActual = VelocidadAnterior + Incremento;

console.log("Velocidad Anterior: " + VelocidadAnterior);
console.log("Velocidad Actual: " + VelocidadActual);