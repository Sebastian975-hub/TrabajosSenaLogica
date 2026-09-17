const distancia1 = parseInt(prompt("Digite la cantidad de kilometros recorrido1"));
const distancia2 = parseInt(prompt("Digite la cantidad de kilometros recorrido2"));
const distancia3 = parseInt(prompt("Digite la cantidad de kilometros recorrido3"));

 const promedioRecorrido = (distancia1 + distancia2 + distancia3)/3;

 const recorridoTotal= distancia1 + distancia2 + distancia3

  if(recorridoTotal >=12){
    console.log("Excelente distancia");
    console.log("Promedio: " + promedioRecorrido);
 }else{
     console.log("Promedio: " + promedioRecorrido);
 }