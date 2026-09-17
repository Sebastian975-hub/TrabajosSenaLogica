const librosAlIniciar = parseFloat(prompt("Introduzca la cantidad de libros que tenia al iniciar"));

const LibrosPrestados = 457;
const LibrosActuales = librosAlIniciar - LibrosPrestados;

if (LibrosActuales > 0) {
    console.log("Si hay libros");
} else {
    console.log("No hay libros");
}