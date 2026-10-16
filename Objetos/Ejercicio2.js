

let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa",
ciudad: "San Gil" };

const existeClave = (objeto, clave) =>{
    return clave in objeto;
}

const actualizarDato  = (objeto, clave, valor) =>{
    objeto[clave] = valor;
    console.log(`Actualizo: ${clave} = ${valor}`);
}

const monstrarCliente = (objeto) =>{
     console.log("Perfil final:");
    console.log("Nombre: " + objeto.nombre);
    console.log("Teléfono: " + objeto.telefono);
    console.log("Barrio: " + objeto.barrio);
    console.log("Ciudad: " + objeto.ciudad);
}
let clave="";

while(clave !=="fin"){
    clave = prompt("¿Qué dato quieres cambiar? (o escribe 'fin' para terminar):");
    console.log(`¿Qué dato quieres cambiar? ${clave}`)
 if(clave == "fin" || clave == null){
    break;
 }   
 if(existeClave(cliente, clave)){
    let nuevoValor = prompt(`Nuevo valor para ${clave}:`);
   actualizarDato(cliente, clave, nuevoValor);
} else {
    alert(`El dato ${clave} no existe.`);
}

}

monstrarCliente(cliente);

