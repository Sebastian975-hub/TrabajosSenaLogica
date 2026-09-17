
let ValorLlantas;
for(let personas= 1; personas <=10; personas++){
const cantidadLlantas =parseFloat(prompt(`Cuantas llantas va a comprar la personas ${personas}`));

if(cantidadLlantas > 5){
    ValorLlantas = (cantidadLlantas * 800); 
}else if(cantidadLlantas < 5)
  ValorLlantas = (cantidadLlantas * 700);

   console.log(`Persona ${personas}: Compró ${cantidadLlantas} llantas. Total a pagar: $${ValorLlantas}`);
}

  