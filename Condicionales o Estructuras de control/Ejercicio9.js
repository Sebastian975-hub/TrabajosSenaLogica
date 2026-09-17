
const ValorDeHora = parseInt(prompt("Insertar el valor de cada hora"));
const HorasTrabajadas = parseInt(prompt("Insertar las horas trabajas por el empleado"));

const salarioMinimo = (ValorDeHora * HorasTrabajadas);

const retenPensionYSalud = (salarioMinimo * 0.92);

const retenPensionYSaludSuperior = (salarioMinimo * 0.84);

const retenPensionYSaludExtrema =(salarioMinimo * 0.89);

let SalarioNeto;

if (salarioMinimo <= 400000) {
    SalarioNeto = (retenPensionYSalud)
} else if (salarioMinimo <= 800000) {
      SalarioNeto = (retenPensionYSaludSuperior);
}else if(salarioMinimo >= 800000){
    SalarioNeto = (retenPensionYSaludExtrema);  
}
 console.log("Salario Neto de la empresa: " + SalarioNeto);
 console.log("Valor de Horas: " + ValorDeHora);
 console.log("Horas trabajadas por el empleado: " +  HorasTrabajadas);
 console.log("Salario Minimo del Empleado: " + salarioMinimo);
