function mostrarLista(productos) {
    console.log("Lista del mercado:");
    
    
    productos.forEach((producto, i) => {
        console.log(`${i + 1}. ${producto}`);
    });

    console.log(`Total: ${productos.length} productos`);
}


const productosComprar = parseInt(prompt("Cuantos productos va a comprar:"));
console.log(`¿Cuantos productos? ${productosComprar}`);

function leerProductos(cantidad) {
    let productos = [];
    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt(`Producto ${i + 1}:`);
        productos.push(nombre);
        console.log(`Producto ${i + 1}: ${nombre}`);
    }
    return productos;
}

const miLista = leerProductos(productosComprar);
mostrarLista(miLista);

/* === RESPUESTAS A LAS PREGUNTAS DEL ENUNCIADO ===

}1. ¿Se puede detener un forEach a la mitad, como hiciste en existeEnLista?
No, el método forEach no se puede detener ni romper a la mitad utilizando un "break" o un "return" tradicional. Recorrerá obligatoriamente todos los elementos del array de principio a fin.

2. ¿Qué te dice eso sobre cuándo usarlo y cuándo no?
Se debe usar forEach cuando necesitamos realizar una acción con absolutamente todos los elementos del array. NO se debe usar si queremos buscar un elemento específico o detener el ciclo en cuanto se cumpla una condición; para esos casos es mejor usar "for".
*/