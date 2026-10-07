const contarPorEstrellas = (calificaciones) => {
    const contador=[0, 0, 0, 0, 0];
    for(let i = 0 ; i < calificaciones.length ; i++ ){
        const calificacion  = calificaciones[i];

        if(calificacion >= 1 && calificacion <= 5){
            contador[calificacion - 1] ++;
        }
    }
    return contador;
}

const repetirCaracter = (caracter, veces) =>{
    return caracter.repeat(veces);
}

const buscarPosicionMayor = (numero) =>{
    let maximo = numero[0];
    let indiceMayor = 0;

    for(let i = 1 ; i < numero.length ; i++){
        if(numero[i] > maximo){
            maximo = numero[i];
            indiceMayor = i;
        }
    }
    return indiceMayor + 1;
}
const calificacionesCargadas = [];
for (let i = 0; i < 10; i++) {
    const nota = parseInt(prompt(`Calificación ${i + 1}:`));
    console.log(`Calificacion ${i + 1 }: ${nota}`)
    calificacionesCargadas.push(nota);
}
console.log("--- ESTRELLAS ---")
const resultadoContador = contarPorEstrellas(calificacionesCargadas);
console.log("Estrellas 1: (" + resultadoContador[0] + ") " + repetirCaracter("*", resultadoContador[0]));
console.log("Estrellas 2: (" + resultadoContador[1] + ") " + repetirCaracter("*", resultadoContador[1]));
console.log("Estrellas 3: (" + resultadoContador[2] + ") " + repetirCaracter("*", resultadoContador[2]));
console.log("Estrellas 4: (" + resultadoContador[3] + ") " + repetirCaracter("*", resultadoContador[3]));
console.log("Estrellas 5: (" + resultadoContador[4] + ") " + repetirCaracter("*", resultadoContador[4]));

const masFrecuente = buscarPosicionMayor(resultadoContador);
console.log("mas frecuente: " + masFrecuente + " estrellas");