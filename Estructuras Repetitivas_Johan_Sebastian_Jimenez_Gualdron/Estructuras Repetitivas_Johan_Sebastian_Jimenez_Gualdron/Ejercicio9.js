const N = parseInt(prompt("Cuantas personas van a comprar Llantas Ponchadas:"));
for(let i = 1 ; i <= N ; i++){

    let cantidadDeRuedas = parseInt(prompt(`Cuantas ruedas Ponchadas van a comprar el cliente ${i}`));

    if(cantidadDeRuedas < 5){
        PrecioFinal= cantidadDeRuedas * 300;
    }else if(cantidadDeRuedas <=5 && cantidadDeRuedas >=10){
       PrecioFinal = cantidadDeRuedas * 250;     
    }else if(cantidadDeRuedas > 10){
        PrecioFinal =cantidadDeRuedas * 200;
    }
    console.log(`La personas ${i} tiene que pagar ${PrecioFinal}`);

}