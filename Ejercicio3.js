const LeerNumeros = (cantidad) => {
    let listaNumeros = []

    for(let i = 0 ; i < cantidad ; i++ ){

        let num = parseInt(prompt(`Número ${i + 1}:`));
        console.log(`Numero ${i + 1}: ${num}`);
        listaNumeros.push(num);
    }
   return listaNumeros;

}

const ObtenerUltimo = (Numeros) =>{
    return Numeros[Numeros.length - 1];
}

const MostrarMedio = (Numeros) => {
    let N = Numeros.length;

    if( N % 2 !== 0 ){
        let indiceMedio = Math.floor(N / 2);
        console.log(`Del medio: ${Numeros[indiceMedio]}`);
    }else{
        let indiceMedio2 = N / 2;
        let indiceMedio1 = indiceMedio2 - 1;
        console.log(`Del medio son: ${Numeros[indiceMedio1]} y ${Numeros[indiceMedio2]}`);
    }
}

 const N = parseInt(prompt("¿Cuántos números?"));

 console.log(`¿Cuantos numeros? ${N}`);

if (N >= 1) {
    
    const misNumeros = LeerNumeros(N);
    
    console.log(`Primero: ${misNumeros[0]}`);
    console.log(`Último: ${ObtenerUltimo(misNumeros)}`);
    MostrarMedio(misNumeros);
} else {
    console.log("La cantidad debe ser al menos 1.");
}