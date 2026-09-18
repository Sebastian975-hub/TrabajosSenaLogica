
const convertirDolaresAPesos = (dolares) => {
    return  dolares * 3550;
}

const procesarListado = () => {
    let contadorPersonas = 0;
    let totalPesos = 0;

 
let dinero = parseInt(prompt("Dolares (0 para terminar):"));

   while (dinero !== 0) {
        let cantidadTotal = convertirDolaresAPesos(dinero);
        
        console.log(`Los ${dinero} dolares equivale a: ${cantidadTotal} pesos`);


        contadorPersonas++;
        totalPesos += cantidadTotal;

        
        dinero = parseInt(prompt("Dolares (0 para terminar):"));
    }

  
    console.log(`Personas atendidas: ${contadorPersonas}`);
    console.log(`Total en pesos: ${totalPesos}`);

}

procesarListado();