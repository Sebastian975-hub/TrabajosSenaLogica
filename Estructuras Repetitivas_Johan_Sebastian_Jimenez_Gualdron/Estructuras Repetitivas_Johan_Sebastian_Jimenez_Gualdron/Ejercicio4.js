
const N = parseInt(prompt("Cuantos clientes van a obtener un seguro"));


let cuota = 0;

for(let clientes =1 ; clientes <=N ; clientes++ ){

    const EfectivoDeFianza=(parseInt(prompt(`¿cuanto es la cantidad de dinero va efectuar el cliente ${clientes} ?`)));
    if( N<=50000 ){
   cuota = EfectivoDeFianza * 0.3 
    }else (N >= 50000)
    cuota= EfectivoDeFianza * 0.2
    console.log(`El cliente ${clientes}: tiene la cuota de: ${cuota}`);
}
