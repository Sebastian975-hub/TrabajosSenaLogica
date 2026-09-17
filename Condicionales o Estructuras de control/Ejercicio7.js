const pesoPersona= parseInt(prompt("Digite su peso"));

const reduccion1 = (pesoPersona*10)/100;
const reduccion2 = (pesoPersona - reduccion1*18.5)/100;
const  aumento = (pesoPersona -reduccion1-reduccion2*3)/100;
const pesoActual = (pesoPersona-reduccion1-reduccion2+aumento)


console.log("Disminucion1: " + reduccion1);
console.log("Disminucion2: " + reduccion2);
console.log("Aumento:" +  aumento);
console.log("Peso Actual: " + pesoActual)

if(pesoActual > 78){
    console.log("Tiene sobrepeso")
}else{
    console.log("No tiene sobrepeso")
}