const NotaEstudiante = parseInt(prompt("Ingrese la Nota del Estudiante"));

if (NotaEstudiante < 2.0 ) {
    console.log("DEFICIENTE");
} else if (NotaEstudiante >= 2.0 && NotaEstudiante < 3.0) {
    console.log("INSUFICIENTE");
} else if (NotaEstudiante > 3.0 && NotaEstudiante < 3.5) {
    console.log("ACEPTABLE");
} else if (NotaEstudiante > 3.6 && NotaEstudiante < 4.5) {
    console.log("BUENO");
} else if (NotaEstudiante >= 4.6) {
    console.log("EXCELENTE");
}