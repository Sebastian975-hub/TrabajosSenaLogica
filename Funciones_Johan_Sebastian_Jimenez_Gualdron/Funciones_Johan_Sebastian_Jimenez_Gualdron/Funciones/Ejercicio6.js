const CantidaDeObreros = parseInt(prompt("Cuantos obreros trabajan en la empresa ? "))
let = totalNomina= 0;
console.log(`La cantidad de obreros registrados son de ${CantidaDeObreros}`)
const HorasExtras = (Horas) =>{

    if (Horas > 40) {
        return Horas -40;
}
return 0;
}
const SalarioSemanal = (Horas) => {
    let extras = HorasExtras(Horas);

    if(extras > 0){
        return(40 * 12000) + (extras * 15000);
    }else{
        return Horas * 12000;
    }
}

for (let i = 1; i <= CantidaDeObreros; i++){
    let HorasTrabajadas = parseInt(prompt(`Cuantas horas trabajo el obrero ${i}?`));

    let SalarioObrero = SalarioSemanal(HorasTrabajadas);

    totalNomina += SalarioObrero;

    console.log(`Horas Obrero ${i}: ${HorasTrabajadas} || Salario: ${SalarioObrero}`);
}
 console.log(`Total nomina: ${totalNomina}`);