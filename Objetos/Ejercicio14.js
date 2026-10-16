let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };

const contarUnidades = (objeto) =>{
    let valores = Object.values(objeto);
    let sumaTotal = 0;

    valores.forEach((cantidad) =>{
        sumaTotal = sumaTotal + cantidad;
    })
    return sumaTotal;
}

const obtenerStockBajo = (objeto) => {
    let parejas = Object.entries(objeto);
    let resultadoBajos = [];

    parejas.forEach((par) => {
        let nombre = par[0];
        let cantidad = par[1];

        if (cantidad > 0 && cantidad < 10) {
            resultadoBajos.push(par); 
        }
    });

    return resultadoBajos;
}


const formatearPares = (listaPares) => {
    let textos = listaPares.map((par) => {
        let nombre = par[0];
        let cantidad = par[1];
        return `${nombre} (${cantidad})`;
    });

    return textos.join(", ");
}


const obtenerAgotados = (objeto) => {
    let parejas = Object.entries(objeto);
    let resultadoAgotados = [];

    parejas.forEach((par) => {
        let nombre = par[0];
        let cantidad = par[1];

        if (cantidad === 0) {
            resultadoAgotados.push(nombre); 
        }
    });

    return resultadoAgotados.join(", ");
}

const mostrarReporte = (objeto) => {
    let llaves = Object.keys(objeto);
    
    console.log("Productos: " + llaves.length);
    console.log("Unidades en total: " + contarUnidades(objeto));
    
    let paresBajos = obtenerStockBajo(objeto);
    console.log("Stock bajo: " + formatearPares(paresBajos));
    
    console.log("Agotados: " + obtenerAgotados(objeto));
}

mostrarReporte(inventario);