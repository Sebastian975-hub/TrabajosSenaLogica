for (let i = 1; i <= 70; i++) {
    console.log( `Persona${i} `);
    
   
    let devaluacionAuto = parseFloat(prompt(`Persona ${i}: Ingrese la devaluación del automóvil a los 3 años:`));
    let incrementoTerreno = parseFloat(prompt(`Persona ${i}: Ingrese el incremento del terreno a los 3 años:`));
    
    if (devaluacionAuto (incrementoTerreno / 2)) {
        console.log("Decisión: DEBE COMPRAR EL AUTOMÓVIL.");
    } else {
        console.log("Decisión: DEBE COMPRAR EL TERRENO.");
    }
}
