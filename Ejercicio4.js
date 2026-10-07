const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const LeerVentas = (ListaDias) => {

    let ListaVentas = [];
    for (let i = 0; i < ListaDias.length; i++) {

        let venta = parseInt(prompt(`Venta del ${ListaDias[i]}`));

        console.log(`Venta del ${ListaDias[i]}: ${venta} `)
        ListaVentas.push(venta);

    }

    return ListaVentas;

}

const CalcularTotal = (numeros) =>{
    let suma = 0;
    for(let i = 0 ; i< numeros.length ; i++ ){
        suma += numeros[i];
    }
    return suma;

    }

    const MostrarReporte = (dias,ventas) =>{

        console.log("---- REPORTE DE VENTAS DE LA SEMANA ----");

     for(let i = 0 ; i < dias.length ; i++){

        console.log(`${dias[i]}: $${ventas[i]}`);
     }

     const totalSemana = CalcularTotal(ventas);
     console.log(`Total semana : $${totalSemana}`);

    }

    const misVentas = LeerVentas(dias);

    MostrarReporte(dias,misVentas);
