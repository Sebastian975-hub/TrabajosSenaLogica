
const ObtenerMayor = (a, b) => {
    if (a > b) {

        return a

    } else {

        return b
    }
}
const ObtenerMenor = (a, b) => {
    if (a < b) {

        return a;

    } else {

        return b;

    }
}

let SumaContaminacion = 0;
let MenorContaminacion;
let MayorContaminacion;

const CantidadDeAutos= 3;

for( let i = 1 ; i <= CantidadDeAutos  ; i++){

    let puntos = parseInt(prompt(`Puntos auto ${i}`))

    SumaContaminacion += puntos;

    if(i === 1){
        MenorContaminacion= puntos;
        MayorContaminacion=puntos;
        
    }else{
        MayorContaminacion = ObtenerMayor(MayorContaminacion, puntos);
        MenorContaminacion = ObtenerMenor(MenorContaminacion, puntos);

    }
    console.log(`Puntos del auto ${i}: ${puntos} `)
}

let promedioFinal = SumaContaminacion / CantidadDeAutos;

console.log(`Promedio: ${promedioFinal}`);
console.log(`Menor contaminacion: ${MenorContaminacion}`);
console.log(`Mayor contaminacion: ${MayorContaminacion}`);