const Años = parseInt(prompt("Introduce tu Año de Nacimiento"));

const AñosVividos = 2026 - Años;

const DiasVividos = AñosVividos * 365;

const HorasVivido = DiasVividos * 24


if (Años < 2000){
    console.log("Dias Vividos: " + DiasVividos);
    console.log("Horas Vividas: " + HorasVivido);
}else{
    console.log("Error")
}
