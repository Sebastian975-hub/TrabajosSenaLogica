

const calcularCubo = (num) => num * num * num;
const CalcularCuartaParte = (num) => num/4;
let sumaDeCubo=0;
for(let i= 1 ; i<=10 ; i++ ){
 
   const Numeros=parseInt(prompt(`Ingrese el numero ${i}`));

  let Cubo = calcularCubo(Numeros);
  let CuartaParte = CalcularCuartaParte(Numeros);

   sumaDeCubo += Cubo;

console.log(`Numero ${i} Numero ${Numeros} | Cubo ${Cubo} | Cuarta parte ${CuartaParte}`)

}
console.log(`Suma de los cubos: ${sumaDeCubo}`)