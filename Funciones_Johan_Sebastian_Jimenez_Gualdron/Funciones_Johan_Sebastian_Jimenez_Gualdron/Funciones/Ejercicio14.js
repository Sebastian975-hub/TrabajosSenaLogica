const atenderCliente = (numeroCliente) => {
    let totalCliente = 0; 
    let precio = parseFloat(prompt(`Cliente ${numeroCliente} Ingrese precio del producto`));

    while (precio !== 0) {

         console.log(`Precio producto: ${precio}`);

        totalCliente += precio;
        precio = parseFloat(prompt(`Cliente ${numeroCliente} Ingrese siguiente precio (0 para terminar)`));
    }

    return totalCliente; 

};


const hayOtroCliente = () => {
    let respuesta = prompt("¿Hay otro cliente? (S/N):");
    if (!respuesta) return false; 
    return respuesta.toUpperCase() === 'S';
};


let contadorClientes = 0;
let totalCobradoDia = 0;
let montoCompraMasAlta = 0;
let clienteCompraMasAlta = 0;

let continuar = true;

while (continuar) {
    contadorClientes++;
    console.log(`Cliente ${contadorClientes}`);
    
    
    let totalClienteActual = atenderCliente(contadorClientes);
    console.log(`Total cliente ${contadorClientes}: ${totalClienteActual}`);
    
    totalCobradoDia += totalClienteActual; 
    
    if (totalClienteActual > montoCompraMasAlta) {
        montoCompraMasAlta = totalClienteActual;
        clienteCompraMasAlta = contadorClientes;
    }
    
    continuar = hayOtroCliente();
}


console.log(`Clientes atendidos: ${contadorClientes}`);
console.log(`Total cobrado: ${totalCobradoDia}`);
console.log(`Compra más alta: cliente ${clienteCompraMasAlta} con ${montoCompraMasAlta}`);