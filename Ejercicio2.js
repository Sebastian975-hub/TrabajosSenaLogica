
const LeerNotaValida = (numero) => {
    while (true) {
       
        let nota = parseFloat(prompt(`Ingrese su nota numero ${numero} de 0 a 5:`));
        
       
        console.log(`Nota ${numero}: ${isNaN(nota) ? "Texto" : nota}`);

       
        if (nota >= 0 && nota <= 5 && !isNaN(nota)) {
            return nota; 
        }

      
        console.log("Nota inválida, debe estar entre 0 y 5");
    }
}

const CalcularPromedio = (numeros) => {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

const UnirConComas = (lista) => {
    let resultado = "";
    for (let i = 0; i < lista.length; i++) {
        resultado += lista[i];

        if (i < lista.length - 1) {
            resultado += ", ";
        }
    
    }
        return resultado;
}

const IniciarPrograma = () => {
    let misNotas = [];
    let CantidadAprendices = 5;

    for (let i = 0; i < CantidadAprendices; i++) {
        let NotaValida = LeerNotaValida(i + 1);
        misNotas.push(NotaValida);
    }

    
    let notasTexto = UnirConComas(misNotas);
     console.log(`Notas: ${notasTexto}`);

    let promedioFinal = CalcularPromedio(misNotas);
     console.log(`Promedio: ${promedioFinal.toFixed(1)}`);

  
    if (promedioFinal >= 3.0) {
        console.log("El grupo aprobó");
    } else {
        console.log("El grupo no aprobó");
    }
}

IniciarPrograma();