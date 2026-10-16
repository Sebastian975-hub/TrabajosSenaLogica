const leerAprendiz = () =>{
    let nombre = prompt("Ingrese su nombre completo");
    let edad = parseInt(prompt("Ingrese su edad"));
    let ficha =  parseInt(prompt("Ingrese el numero de ficha"));
    let programa = (prompt("Ingrese el nombre del programa"));

    let mayorEdad  = edad >= 18;

    let aprendiz = {
      nombre: nombre,
      edad: edad,
      ficha: ficha,
      programa: programa,
      mayorEdad: mayorEdad

    }
    return aprendiz;
   
}

const monstrarFicha = (aprendiz) =>{

    let textoMayor = aprendiz.mayorEdad ? "si" : "no";

    console.log("--- Ficha del aprendiz ---");
    console.log("Nombre: " + aprendiz.nombre);
    console.log("Edad: " + aprendiz.edad + " años");
    console.log("Ficha: " + aprendiz.ficha);
    console.log("Programa: " + aprendiz.programa);
    console.log("Mayor de edad: " + textoMayor);
}

let resultado = leerAprendiz();
monstrarFicha(resultado);