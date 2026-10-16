
let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };

const calcularPromedioObjeto = (objeto) =>{
let valores = Object.values(objeto);
let suma = 0;


valores.forEach((nota) => {
    suma = suma + nota;
});

let Promedio = suma / valores.length;
return Promedio.toFixed(1);

}



const buscarClaveMayor = (objeto) =>{
    let llaves = Object.keys(objeto);
    let mejorMateria = llaves[0];

    llaves.forEach((materia) =>{
           if(objeto[materia] > objeto[mejorMateria]){
            mejorMateria = materia;
           }
    });
    return mejorMateria;
}

const filtrarClavesMenores = (objeto, limite )=>{
       let llaves  = Object.keys(objeto);

       let porReforzar = llaves.filter((materia)=>{
        return objeto[materia] < limite;

       })
return porReforzar;
}


const mostrarBoletin = (objeto) =>{
    let llaves = Object.keys(objeto);

    llaves.forEach((materia)=>{
        console.log(`${materia}: ${objeto[materia]}`);
    })

    console.log("Promedio: " + calcularPromedioObjeto(objeto));
    console.log("Mejor materia: " + buscarClaveMayor(objeto));

     let materiasBajas = filtrarClavesMenores(objeto, 3.5);
    console.log("Por reforzar: " + materiasBajas.join(", "));
}

mostrarBoletin(notas);

 /*RESPUESTA A LA PREGUNTA DEL ENUNCIADO:
  ¿Qué función del ejercicio 5 desapareció por completo y por qué?
  
  Respuesta: Desapareció por completo la función "contarClaves". 
  Esto se debe a que al convertir las propiedades del objeto en un arreglo mediante Object.keys() u Object.values(), 
  podemos usar directamente la propiedad nativa ".length" del arreglo para saber cuántas materias hay, 
  haciendo innecesario un bucle manual para contarlas.
*/