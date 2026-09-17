const N = parseInt(prompt("¿Cuantas ternas de numeros deseas evaluar"));

for (let i = 1; i <= N; i++) {
    console.log(`Terna ${i}`);

    let num1 = parseInt(prompt(`Terna ${i}  Ingrese el primer numero`));
    let num2 = parseInt(prompt(`Terna ${i}  Ingrese el segundo numero`));
    let num3 = parseInt(prompt(`Terna ${i}  Ingrese el tercer numero`));


    let medio = 0;

    if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
        medio = num1;
    } else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
        medio = num2;
    } else {
        medio = num3;
    }
    console.log(`Los números ingresados fueron: ${num1}, ${num2}, ${num3}`);
    console.log(`El número medio es: ${medio}`);
}


