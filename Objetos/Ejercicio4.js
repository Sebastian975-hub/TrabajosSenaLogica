const crearReserva = (cliente, adultos) => {
    let reserva = {
        cliente: cliente,
        actividad: "Rafting rio Fonce",
        adultos: adultos,
        seguro: true
    }
    return reserva;
}

const calculartotal = (reserva) => {
    let totaladultos = reserva.adultos * 70000;

    let totalMenores = 0;
    if ("menores" in reserva) {
        totalMenores = reserva.menores * 50000;
    }


    let subtotal = totaladultos + totalMenores;

    if ("seguro" in reserva) {
        let totalPersonas = reserva.adultos + (reserva.menores || 0);
        subtotal = subtotal + (totalPersonas * 8000);

    }

    return subtotal;
}

const mostrarReserva = (reserva) => {
    console.log("--- Reserva ---");
    console.log("Cliente: " + reserva.cliente);
    console.log("Actividad: " + reserva.actividad);
    console.log("Adultos: " + reserva.adultos);


    if ("menores" in reserva) {
        console.log("Menores: " + reserva.menores);
    }

    if ("seguro" in reserva) {
        console.log("Seguro: Incluido");
    } else {
        console.log("Seguro: No Incluido");
    }

    let totalFinal = calculartotal(reserva);
    console.log("Total: $" + totalFinal);
}

let nombreCliente = prompt("cliente:");
let cantAdultos = parseInt(prompt("Adultos:"));

let miReserva = crearReserva(nombreCliente, cantAdultos);

let tieneMenores = prompt("¿Van menores de edad? (si/no):");
if (tieneMenores.toLowerCase() === "si") {
    let cantMenores = parseInt(prompt("¿Cuántos menores?:"));
    miReserva.menores = cantMenores;
}

let rechazaSeguro = prompt("¿Rechaza el seguro? (si/no):");
if(rechazaSeguro.toLowerCase() ==="si"){
    delete miReserva.seguro;
}

mostrarReserva(miReserva);