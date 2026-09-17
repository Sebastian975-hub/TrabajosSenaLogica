const nivel = prompt("Ingrese el nivel del alumno (preparatoria / profesional):").toLowerCase();
const promedio = parseFloat(prompt("Ingrese el promedio del alumno:"));

let unidades = 0;
let descuento = 0;
let costoPorCadaCinco = 0;


let materiasReprobadas = 0;
if (nivel === "preparatoria" && promedio <= 7) {
    materiasReprobadas = parseInt(prompt("Ingrese el número de materias reprobadas:"));
}


if (nivel === "preparatoria") {
    costoPorCadaCinco = 50000;

    if (promedio >= 9.5) {
        unidades = 55;
        descuento = 0.25; 
    } else if (promedio >= 9 && promedio < 9.5) {
        unidades = 50;
        descuento = 0.10; 
    } else if (promedio > 7 && promedio < 9) {
        unidades = 50;
        descuento = 0.0; 
    } else if (promedio <= 7 && materiasReprobadas <= 3) {
        unidades = 45;
        descuento = 0.0;
    } else if (promedio <= 7 && materiasReprobadas >= 4) {
        unidades = 40;
        descuento = 0.0;
    }

} else if (nivel === "profesional") {
    costoPorCadaCinco = 80000;

    if (promedio >= 9.5) {
        unidades = 55;
        descuento = 0.20; 
    } else if (promedio < 9.5) {
        unidades = 55;
        descuento = 0.0; 
    }
}




let gruposDeCinco = unidades / 5;


let costoBruto = gruposDeCinco * costoPorCadaCinco;


let valorDescuento = costoBruto * descuento;
let totalAPagar = costoBruto - valorDescuento;



console.log(`--- Resumen de Matrícula ---`);
console.log(`Nivel: ${nivel}`);
console.log(`Unidades autorizadas: ${unidades}`);
console.log(`Costo base: $${costoBruto}`);
console.log(`Descuento aplicado: $${valorDescuento} (${descuento * 100}%)`);
console.log(`Total final a pagar: $${totalAPagar}`);