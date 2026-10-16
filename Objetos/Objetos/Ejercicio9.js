let cliente = {
nombre: "Laura Gómez",
telefonos: ["3104567890", "6077241234"],
direccion: { calle: "Calle 12 # 9-45", barrio: "Centro", ciudad: "San Gil" }
};
let clienteNuevo = { nombre: "Pedro Ruiz", telefonos: [] };

const obtenerCiudad = (objetoCliente) => {
  
    if (objetoCliente.direccion && objetoCliente.direccion.ciudad) {
        return objetoCliente.direccion.ciudad;
    } else {
        return "sin dirección";
    }
}
const cambiarDireccion = (objetoCliente, nuevaCalle, nuevoBarrio) => {
  
    if (!objetoCliente.direccion) {
        objetoCliente.direccion = {};
    }
    objetoCliente.direccion.calle = nuevaCalle;
    objetoCliente.direccion.barrio = nuevoBarrio;
}

const mostrarFicha = (objetoCliente) => {
    console.log(objetoCliente.nombre);
    
  
    if (objetoCliente.telefonos.length > 0) {
        console.log("Teléfonos: " + objetoCliente.telefonos.join(", "));
    } else {
        console.log("Teléfonos: sin teléfonos");
    }


    if (objetoCliente.direccion) {
        let dir = objetoCliente.direccion;
        console.log(`Dirección: ${dir.calle}, ${dir.barrio}, ${dir.ciudad}`);
    } else {
        console.log("Dirección: sin dirección");
    }
}
console.log("--- Antes ---");
mostrarFicha(cliente);

let nuevoTel = prompt("Nuevo teléfono:");
let nuevoBarrio = prompt(" Nuevo barrio:");
let nuevaCalle = prompt(" Nueva calle:");


if (nuevoTel) {
    cliente.telefonos.push(nuevoTel);
}
cambiarDireccion(cliente, nuevaCalle, nuevoBarrio);

console.log("--- Después ---");
mostrarFicha(cliente);
console.log(`Ciudad de ${clienteNuevo.nombre}: ` + obtenerCiudad(clienteNuevo));