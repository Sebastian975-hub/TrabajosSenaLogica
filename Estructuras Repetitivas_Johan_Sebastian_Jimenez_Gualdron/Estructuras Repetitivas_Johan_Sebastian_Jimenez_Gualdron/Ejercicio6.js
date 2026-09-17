let totalAcumulacionIMEA = 0;
let totalDinero = 0;

for (let Semana = 1; Semana <= 5; Semana++) {

    let ContaminacionDiaria = (parseInt(prompt(`Cuanto fue el IMECA de el ${Semana} dia`)));
    let ValorDiarioEmpresa = parseInt(prompt(`Cuanto son las ganacias diarias ${Semana}`));

    totalAcumulacionIMEA += ContaminacionDiaria;

    totalDinero += ValorDiarioEmpresa;
}
    let promedio = (totalAcumulacionIMEA / 5);



    if (promedio > 170) {

        let cobroDescontaminacion = totalDinero * 0.50
        console.log("El valor a pagar si no detiene la produccion es: " + cobroDescontaminacion)

    } else {
    console.log("No tiene sancion , ni multa");
    }
