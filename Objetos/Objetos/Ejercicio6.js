
let glosario = {
api: "Conjunto de reglas para que dos programas se comuniquen.",
servidor: "Programa que recibe peticiones y devuelve respuestas.",
ruta: "Dirección a la que llega una petición, como /productos.",
middleware: "Función que se ejecuta entre la petición y la respuesta.",
endpoint: "Combinación de un método HTTP y una ruta."
};

const contarClaves = (objeto) =>{
    let contador = 0;
    for(let clave in objeto){
        contador++;
    }
    return contador;
}

const buscarDefinicion = (glosario, termino) =>{
    let terminoMIn = termino.toLowerCase();

    if(terminoMIn in glosario){
        return glosario[terminoMIn];
    }else{
        return undefined;
    }
}

let terminoInput = "";

while(terminoInput !== "fin"){
    let entrada = prompt("Termino:");
    console.log(`Término: ${entrada}`);

    if(entrada === null || entrada.toLowerCase() === "fin"){
        break
    }

    terminoInput = entrada;

    let definicion = buscarDefinicion(glosario, terminoInput);

    if(definicion !== undefined){
        console.log(`${terminoInput.toLowerCase()}: ${definicion}`);
    }else{
         console.log(`"${terminoInput}" no está en el glosario`);

         let quiereAgregar = prompt(`Quieres agregarlo? (si/no):`);

         if(quiereAgregar !== null && quiereAgregar.toLowerCase() === "si"){
            let nuevaDefinicion = prompt("Definicion");

            glosario[terminoInput.toLowerCase()] = nuevaDefinicion;
            console.log("Agregado");
         }
    }
}
console.log(`El glosario tiene ${contarClaves(glosario)} terminos`)