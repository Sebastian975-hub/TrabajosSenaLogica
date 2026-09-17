const GolesPrimerEncuentro = parseInt(prompt("1.Encuentro: cuantos Goles?"));
const GolesSegundoEncuentro = parseInt(prompt("2.Encuentro: cuantos Goles?"));
const GolesTercerEncuentro = parseInt(prompt("3.Encuentro:  cuantos Goles?"));
const GolesCuartoEncuentro = parseInt(prompt("4.Encuentro: cuantos Goles?"));

const SumaGoles = GolesPrimerEncuentro + GolesSegundoEncuentro + GolesTercerEncuentro + GolesCuartoEncuentro;

const SumaMaximaGoles = 20;
const PromedioGoles = SumaGoles/ 4;

if(SumaGoles > SumaMaximaGoles){
    console.log("Promedio de los Goles: " +  PromedioGoles);
}else{
    console.log("No Alcanzo los Goles Requeridos")
}
