
//EJERCICIO 1.

// PREDICCIÓN:

// Primero, con map() voy a multiplicar cada número por 3, así que 
// espero que el array temporal quede como.

// Después, filter() va a agarrar ese resultado y va a dejar 
// pasar solo los números que sean mayores a 10.
// Por lo tanto, el resultado final debería ser.


const numeros2 = [2, 5, 3, 8, 1];
let numeros1 = numeros2.map(n => n * 3);
let numeroFinal = numeros1.filter(n => n > 10);
console.log(numeroFinal);
console.log(numeros2);

//¿Cambió el array numeros? ¿Cómo lo comprobaste?

//No, el array numeros no cambió. El método .map() (al igual que .filter()) 
// no modifica el arreglo original, sino que crea uno nuevo con los resultados. 
// Lo comprobé utilizando console.log(numeros); después de los métodos 
// y observé que en la consola se seguía mostrando el 
// array original [2, 5, 3, 8, 1], sin importar las
//  transformaciones posteriores.


//EJERCICIO 2.
// PREDICCIÓN:

// Al aplicar reverse(), la lista de palabras se va a dar vuelta por completo, quedando como 
// ["estrella", "mar", "luna", "sol"].

// Luego, find() va a buscar de izquierda a derecha la primera
//  palabra que tenga más de 3 letras.

// La primera que cumple es "estrella" (porque tiene 8 letras),
//  así que ese será el resultado final.



const palabras =["sol", "luna", "mar", "estrella"];

let palabras1 = palabras.reverse();
let palabrasFinal = palabras.find(n => n.length > 3);

console.log(`Invertido : ${palabras1}`);
console.log(`Find : ${palabrasFinal}`);

// ¿Qué palabra habría encontrado find() sin el reverse()? ¿Qué le pasó al
// array palabras?

//Sin el reverse(), el método find() habría encontrado la palabra 'luna', 
// ya que es la primera de izquierda a derecha que tiene más de 3 caracteres.
//Al array palabras lo que le pasó es que se modificó permanentemente. 
//A diferencia de otros métodos, .reverse() altera directamente
//el arreglo original invirtiendo su orden, por lo que tanto palabras
//  como palabras1 quedaron guardados como 
// ['estrella', 'mar', 'luna', 'sol']."


//EJERCICIO 3.

// PREDICCIÓN:
// El some() va a dar true porque Luis (17) y Pedro (15) son menores
//  de edad.

// Con el sort(), la lista de personas se va a ordenar de menor
//  a mayor por su edad (Pedro, Luis, Ana, Sara).

// Finalmente, find() buscará la primera persona que tenga 18 
// años o más. Al estar ordenados, la primera que aparece es Ana (25).


const personas = [
{ nombre: "Sara", edad: 31 },
{ nombre: "Luis", edad: 17 },
{ nombre: "Ana", edad: 25 },
{ nombre: "Pedro", edad: 15 },
];

console.log (`some : `+ (personas.some(n => n.edad < 18)));

personas.sort((a, b) => a.edad - b.edad);

let resultado = "";

for(let i = 0; i < personas.length; i++){
    resultado += personas[i].nombre + "(" + personas[i].edad + ")"

    if(i < personas.length -1 ){
        resultado += ", "
    }
}

console.log("Ordenado: " + resultado);

let MayorEdad = personas.find(n => n.edad > 18 )

console.log("Find:",MayorEdad);

//Si no ordenas antes, ¿a quién devuelve find()? 
// ¿Por qué el orden cambia el resultado?

//Si no hubiera ordenado antes, el método .find() habría devuelto a Sara, 
// ya que ella era la primera persona mayor de edad en la lista original y 
// el método busca de izquierda a derecha. El orden cambia el resultado porque,
// al acomodarlos de menor a mayor con .sort(), Ana pasa a estar antes que Sara. 
// Como .find() se detiene inmediatamente al encontrar la primera coincidencia que
//  cumpla la condición, selecciona a Ana por ser la mayor de edad más joven."



//EJERCICIO 4.

// PREDICCIÓN:

// El método concat() va a pegar el array b al final del array a,
//  creando una sola lista larga:.

// Después, el reduce() va a ir sumando todos esos números 
// uno por uno empezando desde cero.

// La suma total me debería dar 27.


const a = [3, 7, 2];
const b = [10, 5];

let union = (a.concat(b));
console.log(union);

let suma = union.reduce((acumulador, n) => acumulador + n, 0);

console.log("Suma:",suma);

//¿concat() modificó a o b?

//No, .concat() no modificó ni al array a ni al array b. 
//Este método no es destructivo; simplemente toma los 
//elementos de ambos y genera un arreglo completamente
//nuevo con la unión.

//Si lo hubiéramos hecho al revés (b.concat(a)), 
//los arrays originales tampoco habrían cambiado.
//La única diferencia es que el nuevo arreglo habría 
//empezado con los números de b y terminado con los de a
//([10, 5, 3, 7, 2]), pero a y b seguirían intactos en sus 
//variables."


//EJERCICIO 5.

// PREDICCIÓN:

// El shift() va a sacar el primer número (el 10) y me va a devolver
//  ese 10.

// Luego, unshift(5) va a meter un 5 al principio, y push(50) 
// va a meter un 50 al final.

// Ambos métodos (unshift y push) modifican el array y me van
//  a devolver el nuevo tamaño de la lista, que es 4 y luego 5.

// Al final, la lista quedara limpia.


const numeros = [10, 20, 30, 40];
let numeroSacado= numeros.shift(0);
console.log("Shift devuelve:",numeroSacado);

let NumeroNuevo = numeros.unshift(5);

console.log("Unshift devuelve:",NumeroNuevo);

let NumeroAgregado = numeros.push(50);

console.log("Push devuelve:",NumeroAgregado);

console.log("Numero queda:", numeros);



//¿Qué devuelven unshift() y push()? ¿Es el array?

//No, unshift() y push() no devuelven el array. Lo que devuelven estos dos 
// métodos es un número entero que representa la nueva longitud 
// (el total de elementos) del arreglo después de haber hecho la modificación.
//unshift(5) agrega el 5 al inicio y devuelve 4 
// (porque el array ahora tiene 4 elementos).
//push(50) agrega el 50 al final y devuelve 5
// (porque el array pasa a tener 5 elementos).

//Un array es un tipo de caja q guarda informacion
//y dicha informacion se puede modificar.


//EJERCICIO 6.

// PREDICCIÓN:

// Al buscar "Sara" con indexOf(), me va a decir que está en la 
// posición 2. Como es un índice válido, se cambiará por "Camila".

// Al buscar "Juan", indexOf() me va a tirar un -1 porque
//  no existe en la lista, por lo que el código no modificará nada.


const nombres = ["Ana", "Luis", "Sara", "Pedro"];


let indiceSara = nombres.indexOf("Sara");

if (indiceSara !== -1) {
    nombres.fill("Camila", indiceSara, indiceSara + 1);
}
console.log('// reemplazar "Sara" por "Camila":', nombres);




const nombres2 = ["Ana", "Luis", "Sara", "Pedro"]; 
let indiceJuan = nombres2.indexOf("Juan"); 

if (indiceJuan !== -1) {
    nombres2.splice(indiceJuan, 1, "Camila");
}
console.log('// reemplazar "Juan" (no existe):', nombres2);


//Si no validas el -1, ¿qué haría nombres.splice(-1, 1, "Camila")?

//Si no se valida el -1, el método .splice() 
// interpretará el número negativo como un índice que 
// uenta desde el final del array hacia atrás. Al ser -1, 
// apuntará automáticamente al último elemento del arreglo 
// en este caso, "Pedro"). Por lo tanto, el código eliminará
//  por error a "Pedro" y lo reemplazará por "Camila", modificando 
// la lista de forma incorrecta en lugar de dejarla intacta.



//EJERCICIO 7.

// PREDICCIÓN:

// El filter() va a revisar qué frutas tienen la letra "a". "manzana", 
// "pera" y "uva" sí la tienen, pero "kiwi" no, así que se queda fuera.

// Luego, join() va a agarrar esas tres frutas que quedaron y las 
// va a pegar en una sola línea de texto separadas por comas.

// El resultado esperado es "manzana, pera, uva".


const frutas = ["manzana", "kiwi", "pera", "uva"];

let frutas_con_A = frutas.filter(n => n.includes("a"));

console.log(frutas_con_A);

console.log("---RESULTADO ESPERTADO---");

let juntar = frutas_con_A.join(", ");

console.log(juntar);

// ¿Por qué no puedes hacer
// primero join() y después filter()?

// No se puede hacer primero join()
// porque ese método convierte el arreglo
// en una sola cadena de texto (string).
//  Como el método .filter() es exclusivo de
// los arreglos y no existe para textos,
// si intentamos ejecutarlo después, JavaScript
//  dará un error en la consola (TypeError)
// y el programa se romperá. Obligatoriamente
// debemos filtrar primero mientras los datos
//  sigan siendo un array.


//EJERCICIO 8.

// PREDICCIÓN:

// Para el array a, reduce() encontrará que el mayor es 9 y every() 
// dará true porque todos son positivos.

// Para el array b, reduce() dirá que el mayor es 4, pero every() 
// dará false porque el -1 rompe la condición de ser mayor a 0.


const a1 = [4, 9, 2, 7];
const b1 = [4, -1, 2];

const MayorA = a1.reduce((max,num)=>(num > max ? num : max));

const TodosMayorA = a1.every(num => num > 0);
console.log(`a: Mayor ${MayorA}, every: ${TodosMayorA}`);

const MayorB = b1.reduce((max, num)=> (num > max ? num : max));

const TodosMayorB = b1.every(num => num > 0);
console.log(`a: Mayor ${MayorB}, every: ${TodosMayorB}`);

//¿Qué valor inicial usaste en reduce() y por qué?

//No utilicé ningún valor inicial explícito en el reduce().
//  Al dejarlo vacío, JavaScript toma automáticamente el primer
//  elemento del array como valor inicial (max) y empieza a comparar
//  desde el segundo.

//Lo hice así porque es lo más seguro para buscar números
//  mayores o menores; si hubiera puesto un valor inicial
//  fijo como 0 y el array solo tuviera números negativos,
//  el resultado sería incorrecto."


//EJERCICIO 9.

// PREDICCIÓN:

// El findIndex() va a buscar el primer objeto donde el precio supere
//  los 100. Ese es el "Cuaderno" (120), que está en la posición 1.

// En la segunda prueba, como ningún producto cuesta más de 500, el 
// método no encontrará nada y devolverá un -1 por defecto.


const productos = [
{ nombre: "Lápiz", precio: 50 },
{ nombre: "Cuaderno", precio: 120 },
{ nombre: "Libro", precio: 200 },
];

const productoMayor = productos.findIndex(n => n.precio > 100);

console.log(productoMayor);

const productoNulo = productos.findIndex(n => n.precio > 500);

console.log(`si ninguno cumple: ${productoNulo}`);

//¿Qué te devolvería find() en lugar de findIndex()
//  con esos mismos datos?

//find() no devuelve la posición (número entero), 
// sino que devuelve el objeto completo que cumpla la condición.
//  Si ningún elemento la cumple, en lugar de -1, devuelve undefined. 


//EJERCICIO 10.

// PREDICCIÓN:

// En el array a, al dividir todo entre 2 con map() quedará 
// [2, 5, 3.5, 6]. Como el 5 sí está ahí, includes() nos arrojará
// un true.

// En el array b, al dividir todo quedará [2, 4.5]. 
// Como el 5 no aparece por ningún lado, includes() 
// nos arrojará un false.


const a2 = [4, 10, 7, 12];
const b2 = [4, 9];

const nuevoArray  = a2.map(n => n / 2);
const verificacion = nuevoArray.includes(5);
console.log("a :",nuevoArray , "->" , verificacion );

const nuevoArray1 = b2.map(n => n / 2);
const verificacion1 = nuevoArray1.includes(5);

console.log("b :", nuevoArray1, "->", verificacion1);

//includes() no acepta una condición como n => n === 5. 
// ¿Qué método usarías si necesitaras una condición?

//A diferencia de includes(), que solo busca un valor exacto 
//y fijo, el método some() permite pasarle una función con 
//una condición (como n => n === 5). Recorre el array y devuelve
//true si al menos un elemento cumple con esa condición, funcionando
//como el reemplazo perfecto en estos casos.



//EJERCICIO 11.

// PREDICCIÓN:

// El map() va a transformar toda la lista original pasándola 
// a letras MAYÚSCULAS puntualmente.

// Después, el find() va a buscar la primera palabra que 
// tenga más de 6 caracteres de largo.

// Esa palabra va a ser "VALENTINA" (tiene 9), ignorando 
// a "SEBASTIAN" porque está más adelante en la lista.


const nombres3 = ["ana", "luis", "valentina", "sara", "sebastian"];

const nombresMayuscula = nombres3.map(n => n.toUpperCase());
console.log(nombresMayuscula);

const NombreMayor = nombresMayuscula.find(n => n.length > 6 );
console.log(NombreMayor);


//EJERCICIO 12.

// PREDICCIÓN:

// El sort() con (a,b)=>b-a va a ordenar las edades de la más grande a
//  la más chica ([40, 32, 21, 15, 8]).

// Como el más joven (8) quedó al final, pop() lo va a borrar 
// de la lista de manera directa.

// Finalmente, push(19) agregará ese nuevo valor justo en la
//  última posición del array modificado.


const edades = [15, 32, 8, 21, 40];

const ordenarMayorMenor  = edades.sort((a,b)=> b - a);
console.log("Ordenado:",ordenarMayorMenor);

ordenarMayorMenor.pop();

console.log("Sin la mas joven",  ordenarMayorMenor);

ordenarMayorMenor.push(19);
console.log("Con la nueva", ordenarMayorMenor);

//¿Qué método usaste para quitar la edad más joven y por qué ese
//  y no otro?

//Utilicé el método pop() porque previamente ordené el array de
//mayor a menor. Al hacer esto, la edad más joven (el número menor) 
//quedó automáticamente posicionada al final del array. Como pop() 
//es el método específico de JavaScript diseñado para eliminar de 
//forma directa el último elemento de una lista, era la opción más 
//eficiente y limpia para este caso."


//EJERCICIO 13.

// PREDICCIÓN:

// En el array a, every() dará true porque todos son mayores a 0, 
// y filter() nos dejará los pares.

// En el array b, every() dará false por culpa del -2, pero 
// filter() igual nos va a devolver todos los pares: [4, -2, 10].


const a4 = [4, 7, 10, 3, 8];
const b4 = [4, -2, 10];

const verifi_Num_Posi =  a4.every(n => n > 0);
const pares= a4.filter(n => n % 2 === 0);

console.log("a:", verifi_Num_Posi, "pares", pares );

const verifi_Num_Posi1 = b4.every(n => n < 0);
const pares1 = b4.filter(n => n % 2 === 0);

console.log("b:",verifi_Num_Posi1, "pares", pares1);


//EJERCICIO 14.

// PREDICCIÓN:

// El reduce() va a sumar todos los precios dando 600, y al 
// dividirlo entre 5, el promedio final va a ser de 120.

// Como 120 es mayor a 100, el código va a filtrar el array
//  para buscar los precios que sean menores a 120.

// El resultado de la lista filtrada debería ser.


const precios = [120, 80, 250, 60, 90];

const precios1 = precios.reduce((acumulador, n)=> acumulador + n , 0);

const promedio = precios1 /5;
console.log("Promedio : ",promedio);

if(promedio > 100){
    const nuevoArray = precios.filter(precios => precios < promedio);
    console.log(nuevoArray);
}




//¿Qué pasa con tu código si el array de precios está vacío?
//  ¿Cómo lo evitas?

//En caso de detectar que está vacío, usaría un método como prompt() 
// para pedirle interactivamente al usuario que introduzca los precios
//  manualmente, o asignaría unos valores por defecto para que el 
// ejercicio pueda continuar su flujo normal.

//Si el array está vacío, el código calculará una división de 0 / 0,
//  lo que generará un resultado NaN (Not a Number) en el promedio.
//Para evitarlo, agregaría una validación al inicio usando
//  precios.length. Si el largo del array es igual a 0, 
// muestro un mensaje de error o detengo la ejecución antes 
// de hacer los cálculos matemáticos



//EJERCICIO 15.

// PREDICCIÓN:

// El slice(0,3) cortará los primeros 3 colores ("rojo", "azul", "verde")
//  sin tocar el array original de colores.

// Luego, concat() unirá ese nuevo pedazo con los secundarios,
//  dando como resultado ["rojo", "azul", "verde", "naranja", "violeta"].

// Al final, el array original colores va a seguir teniendo
//  exactamente sus 5 elementos intactos.


const colores = ["rojo", "azul", "verde", "amarillo", "negro"];
const secundarios = ["naranja", "violeta"];

const tresColores = colores.slice(0,3);
console.log(tresColores);

const Mezcla = (tresColores.concat(secundarios));
console.log(Mezcla);

console.log(colores);

//¿Cómo comprobaste que colores no cambió?

// Al final del código ejecuté un 
// console.log(colores) para imprimir el
//  array original en la consola. Al revisarlo,
//  vi que seguía conteniendo los mismos 5 colores
//  iniciales en su orden original.

//Ya sabía de antemano que no iba a cambiar porque 
// tanto slice() como concat() son métodos 
// inmutables. Esto significa que están diseñados 
// en JavaScript para no modificar los arrays 
// originales, sino para devolver siempre un
// array completamente nuevo con los resultados.

