let numeroAzar = 1; 

while (numeroAzar != 0) {
    
    numeroAzar = Math.floor(Math.random() * 101);
    console.log("El número de la suerte es: " + numeroAzar);


    if (numeroAzar == 0) {
        console.log("¡Salió el 0! El juego terminó.");
        break;
    }

  
    let compra = parseFloat(prompt("Salió el número " + numeroAzar + ". ¿Cuánto dinero gastó el cliente?"));
    let descuento = 0;

   
    if (numeroAzar < 74) {
        descuento = compra * 0.15;
    } else if(numeroAzar >=74){
        descuento = compra * 0.20; 
    }

   
    alert("Dinero descontado: $" + descuento);
}