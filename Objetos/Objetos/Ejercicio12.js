
let a = { nombre: "Morral", precio: 85000 };
let b = { nombre: "Morral", precio: 85000 };
console.log(a === b);



const contarClaves = (objeto) => {
    let contador = 0;
    for (let clave in objeto) {
        contador++;
    }
    return contador;
}

const sonIguales = (objeto1, objeto2) => {

    if (contarClaves(objeto1) !== contarClaves(objeto2)) {
        return false;
    }

    for (let clave in objeto1) {
        if (!(clave in objeto2) || objeto1[clave] !== objeto2[clave]) {
            return false;
        }
    }

    return true;
}


console.log("Caso 1, iguales: " + sonIguales({nombre: "Morral", precio: 85000}, {nombre: "Morral", precio: 85000}));
console.log("Caso 2, distinto precio: " + sonIguales({nombre: "Morral", precio: 85000}, {nombre: "Morral", precio: 90000}));
console.log("Caso 3, a tiene menos claves que b: " + sonIguales({nombre: "Morral"}, {nombre: "Morral", precio: 85000}));
console.log("Caso 4, mismas claves en otro orden: " + sonIguales({precio: 85000, nombre: "Morral"}, {nombre: "Morral", precio: 85000}));

