
const esHombre = (genero) => {
    if (genero === "H") {
        return true;
    } else {
        return false;
    }
}

const calcularPromedio = (suma, cantidad) => {
    return suma / cantidad;
}

const cantidadPersonas = parseInt(prompt("¿Cuántas personas?:"));

let hombre = 0;
let mujer = 0;
let SumaEdadHombre = 0;
let SumaEdadMujer = 0;
let SumaEdadTotal = 0;

for(let i = 1 ; i <=cantidadPersonas ; i++){

    let genero = prompt(`Genero de la persona ${i} (H si es Hombre / M si es Mujer):`);
    let edad = parseInt(prompt(`Cuantos años tiene la persona ${i}`));

    SumaEdadTotal +=edad;

     if (esHombre(genero)) {
        hombre++;
        SumaEdadHombre += edad;
    } else {
        mujer++;
        SumaEdadMujer += edad;
        
    }

    console.log(`Persona ${i} (H , M) : ${genero} | Edad: ${edad}`);

}

let promedioHombre = "no hay hombres";
let PromedioMujeres = "no hay mujeres";

if(hombre > 0){
    promedioHombre = calcularPromedio(SumaEdadHombre, hombre);
}
if(mujer > 0){
    PromedioMujeres = calcularPromedio(SumaEdadMujer, mujer);
}

let promedioGrupo = calcularPromedio(SumaEdadTotal, cantidadPersonas);

console.log(`Hombres: ${hombre} | Promedio de edad: ${promedioHombre}`);
console.log(`Mujeres: ${mujer} | Promedio de edad: ${PromedioMujeres}`);
console.log(`Promedio del grupo: ${promedioGrupo}`);


