
const N = parseInt(prompt("¿A cuántas personas deseas calcular las pulsaciones?"));


for (let i = 1; i <= N; i++) {
    
    
    let edad = parseInt(prompt(`Persona ${i}: ¿Cuál es su edad?`));
    let sexo = prompt(`Persona ${i}: ¿Cuál es su sexo? (F para femenino / M para masculino)`).toUpperCase();
    
    let pulsaciones = 0;

  
    if (sexo === "F") {
        pulsaciones = (220 - edad) / 10;
        console.log(`Persona ${i} (Femenino, ${edad} años) -> Pulsaciones: ${pulsaciones}`);
        alert(`Las pulsaciones para la persona ${i} son: ${pulsaciones}`);
    } else if (sexo === "M") {
        pulsaciones = (210 - edad) / 10;
        console.log(`Persona ${i} (Masculino, ${edad} años) -> Pulsaciones: ${pulsaciones}`);
        alert(`Las pulsaciones para la persona ${i} son: ${pulsaciones}`);
    } else {
      
        alert("Sexo no válido. Inténtalo de nuevo con esta persona.");
        i--; //
    }
}
