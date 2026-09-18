const esNotaValido = (nota) => {
    return nota >= 0 && nota <= 5;
}

const estaAprovado = (nota) => {
    return nota >= 3.0;  
}

let totalNotasValidas = 0;
let sumaNotas = 0;
let notaMasBaja = 5.1;
let aprobados = 0;

let nota = parseFloat(prompt("Nota (-1 para terminar)"));

while (nota !== -1) {

    if (esNotaValido(nota)) {

         console.log(`Nota (-1 para terminar): ${nota}`);

        totalNotasValidas++
        sumaNotas += nota;
    

    if (nota < notaMasBaja) {
        notaMasBaja = nota;
    }

    if (estaAprovado(nota)) {
        aprobados++
    }
    } else {
          console.log(`Nota (-1 para terminar): ${nota}`);
        console.log("Nota invalida, debe estar entre 0 y 5");
    }

    nota = parseFloat(prompt("Nota (-1 para terminar)"));
}

console.log(` Nota (-1 para terminar): -1`);


    if (totalNotasValidas > 0) {
        let promedio = sumaNotas / totalNotasValidas;

        console.log(`Notas válidas: ${totalNotasValidas}`);
        console.log(`Promedio: ${promedio}`);
        console.log(`Nota más baja: ${notaMasBaja}`);
        console.log(`Aprobados: ${aprobados}`);
    }else{
        console.log("No se ingreso notas validas");

    }


