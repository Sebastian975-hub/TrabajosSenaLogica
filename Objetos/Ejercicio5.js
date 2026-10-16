

let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };

const contarClaves = (objeto) =>{
    let contador = 0;
    for(let materia in objeto){
        contador++;
    }
    return contador;
}

const calcularPromedioObjeto = (objeto) =>{
    let suma = 0;
    for(let materia in objeto){
        suma = suma + objeto[materia];
    }

    let totalMaterias = contarClaves(objeto);
    let promedio = suma / totalMaterias;
 
    return promedio.toFixed(1);

}

const filtrarClavesMenores = (objeto, limite) => {
    let porReforzar = [];
    for (let materia in objeto) {
        if (objeto[materia] < limite) {
            porReforzar.push(materia); 
        }
    }
    return porReforzar;
}

const mostrarBoletin = (objeto) => {
  
    for (let materia in objeto) {
        console.log(`${materia}: ${objeto[materia]}`);
    }

   
    console.log("Promedio: " + calcularPromedioObjeto(objeto));
    console.log("Mejor materia: " + buscarClaveMayor(objeto));
    
  
    let materiasBajas = filtrarClavesMenores(objeto, 3.5);
    console.log("Por reforzar: " + materiasBajas.join(", "));
}


mostrarBoletin(notas);