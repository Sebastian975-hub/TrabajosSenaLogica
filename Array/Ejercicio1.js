const productosComprar = parseInt(prompt("Cuantos productos va a comprar?"));
 
  console.log(`¿Cuantos productos? ${productosComprar}`)
function leerProductos(cantidad) {

    let productos = [];
    
    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt(`Producto ${i + 1}:`);
        productos.push(nombre); 

        console.log(`Producto ${i+1}: ${nombre}`)
    }
    
    return productos;
}

function mostrarLista(productos) {
    console.log("Lista del mercado:");
    
  
    for (let i = 0; i < productos.length; i++) {
       
        console.log(`${i + 1}. ${productos[i]}`);
    }
    
    console.log(`Total: ${productos.length} productos`);
}
const miLista = leerProductos(productosComprar);
mostrarLista(miLista); 