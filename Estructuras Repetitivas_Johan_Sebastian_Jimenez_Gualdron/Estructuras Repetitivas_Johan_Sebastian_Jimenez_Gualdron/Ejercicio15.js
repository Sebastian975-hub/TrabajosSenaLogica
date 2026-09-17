const PRECIO_DOLAR = 3550; 
let contadorPersonas = 1;


let dolares = parseFloat(prompt(`Persona ${contadorPersonas} - Ingrese la cantidad de dólares (O ingrese 0 para terminar):`));


while (dolares !== 0) {
    
  
    let pesos = dolares * PRECIO_DOLAR;
    
  
    console.log(`Persona ${contadorPersonas}: US$${dolares} equivalen a $${pesos} pesos.`);
    
    
    contadorPersonas++;
    
   
    dolares = parseFloat(prompt(`Persona ${contadorPersonas} - Ingrese la cantidad de dólares (O ingrese 0 para terminar):`));
}

console.log("El programa ha finalizado porque se ingresó una cantidad de 0 dólares.");