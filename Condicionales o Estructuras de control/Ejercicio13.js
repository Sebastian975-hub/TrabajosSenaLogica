const TemperaturaActual = parseInt(prompt("Ingrese la temperatura Actual"));
if(TemperaturaActual < 23){
    console.log("HACE FRIO");
}else if(TemperaturaActual >=23 && TemperaturaActual <30){
    console.log("ES UN BUEN DIA");
}else if(TemperaturaActual >= 30){
    console.log("HACE CALOR");
}