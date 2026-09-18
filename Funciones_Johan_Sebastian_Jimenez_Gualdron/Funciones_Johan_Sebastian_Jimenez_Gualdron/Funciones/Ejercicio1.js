
const Numero1 = parseInt(prompt("Numero para la tabla de multiplicar:"));
let resultado="";


const CalcularLineaTabla = (Numero1 , Numero2)=>{
 let Proceso = (Numero1 * Numero2);
 return `${Numero1} x ${Numero2} = ${Proceso}\n`;
 
}

for(let i=1; i<=10 ; i++){
    resultado += CalcularLineaTabla(Numero1 , i);

}
 console.log(resultado);

