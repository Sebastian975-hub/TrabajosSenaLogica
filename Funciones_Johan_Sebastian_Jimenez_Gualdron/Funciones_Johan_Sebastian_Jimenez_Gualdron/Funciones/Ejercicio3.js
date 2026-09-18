
let DiasRegistrados = parseInt(prompt(`Ingrese los dias que piensa registrar`));

const TempKelvin = (num) => num + 273.15;
const TempFahrenheit = (num) => (num * 1.8) + 32;
let TempCelsius = "";
let promedio=0;

console.log(`Los dias registados fueron ${DiasRegistrados}`);

for (let i = 1; i <= DiasRegistrados; i++) {

    let TempCelsius = parseInt(prompt(`Ingrese la temperatura de dia ${i}`));
    let TemperaturaEnKelvin = TempKelvin (TempCelsius);
    let TemperaturaEnFahrenheit = TempFahrenheit(TempCelsius);

    promedio += TempCelsius;
    console.log(`Dia ${i} : ${TempCelsius} °C = ${TemperaturaEnKelvin} K = ${TemperaturaEnFahrenheit} °F`);

}
let promedioFinal = promedio / DiasRegistrados;

console.log(`El promedio es : ${promedioFinal} °C`)
