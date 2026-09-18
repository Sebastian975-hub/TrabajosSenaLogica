


const leerPromedioBascula = (cantidadBascula) => {

    let PesoNeto = 0;

    for (let i = 1; i <= cantidadBascula; i++) {

        let PesoBascula = parseInt(prompt(`Cuanto pesó en la bascula ${i} ?`));
     console.log(`Báscula ${i}: ${PesoBascula}`);
        
        PesoNeto += PesoBascula
    }
    return PesoNeto / cantidadBascula;

}

const obtenerValorAbsoluto = (numeros) => {

    if (numeros < 0) {
        return numeros * -1
    }
    return numeros;
}

const generarLetrero = (diferente) => {
    if (diferente > 0) {
        return "SUBIO"
    } else if (diferente < 0) {
        return "BAJO"
    } else {
        return "SE MANTUVO";
    }

}

const TotalMiembros = 6;
const Basculas = 10;

for (let m = 1; m < TotalMiembros; m++) {

    console.log(`Miembro ${m}`)

    let PesoAnterior = parseInt(prompt(`Cuantos pesaba el miembro${m}`));

    console.log(`El peso anterior fue ${PesoAnterior}`)

    let promedioActual = leerPromedioBascula(Basculas);

    let diferencia = promedioActual - PesoAnterior;
    let Letrero = generarLetrero(diferencia);
    let KilosModificados = obtenerValorAbsoluto(diferencia)

    if (Letrero === "SE MANTUVO") {
        console.log("SE MANTUVO");
    } else {
        console.log(`${Letrero}  ${KilosModificados} kg`)
    }

}

