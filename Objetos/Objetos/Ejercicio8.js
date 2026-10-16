
let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };

const vender = (inv, producto, cantidad) =>{
    if(!(producto in inv)){
        return (`No vendemos ${producto}`);
    }
    if(inv[producto] < cantidad){
        return (`Solo quedan ${inv[producto]} ${producto}`);
    }

    inv[producto] = inv[producto] - cantidad;
     
    return (`Vendidas ${cantidad} ${producto}. Quedan ${inv[producto]}`)
}

const obtenerAgotados = (inv) =>{
    let agotados = [];
    for(let prod in inv){
        if(inv[prod] === 0){
            agotados.push(prod);
        }
    }
    return agotados;
}

const unirConComas = (lista) =>{
    return lista.join(", ");
}

while(true){
    let prodInput = prompt("producto:");
    console.log(`Producto: ${prodInput}`)

    if(prodInput === null || prodInput.toLowerCase() === "fin"){
        break;
    }

    let producto = prodInput.toLowerCase();
    let cantidad = parseInt(prompt("Cantidad"));
    console.log(`Cantidad: ${cantidad}`);

    let mensajeResuelto = vender(inventario, producto, cantidad);
    console.log(mensajeResuelto);
}
  console.log("Inventario final");
  for(let prod in inventario){
    console.log(`${prod}: ${inventario[prod]}`);
  }

  let listaAgotados = obtenerAgotados(inventario);
  console.log("Agotados: " + unirConComas(listaAgotados));
