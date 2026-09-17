

 let costoMateria = parseInt(prompt(`Cuanto es el costo de las materias del estudiante`));

for (let Estudiantes = 1; Estudiantes <= 38; Estudiantes++) {
 

    let Materias = parseInt(prompt(`Cuantas materias va a cursar el estudiante ${Estudiantes}`));
    let promedio = parseInt(prompt(`Cuanto es el promedio del estudiante ${Estudiantes}`));

    let PresioMateriasFinal = Materias * costoMateria;
    let totalApagar = 0;

    if (promedio >= 9) {
        let descuento = PresioMateriasFinal * 0.30;
        totalApagar = PresioMateriasFinal - descuento

    } else (promedio < 9)

       let iva = PresioMateriasFinal * 0.10;
       totalApagar = (PresioMateriasFinal + iva);

    console.log(`alumno${Estudiantes}: Materias cursadas: ${Materias} , promedio: ${promedio} Total de pagar: ${totalApagar}`)
}
