
let invitados = ["ana", "carlos", "luisa", "pedro", "sofia"]

const existenteEnLista = (lista, valor) => {
    let nombreBuscado = valor.toLowerCase();

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].toLowerCase()=== nombreBuscado) {
            return true;
        }
    }
    return false;
}

let contadorEntrada = 0;
let contadorRechazados = 0;

let nombre = prompt("Nombre");

while(nombre !== null && nombre.toLocaleLowerCase() !=="fin"){
 console.log(`Nombre : ${nombre}`);

 if(existenteEnLista(invitados, nombre)){
    console.log(`${nombre} puede entrar.`);
    contadorEntrada ++;
 }else{
    console.log(`${nombre} no esta en la lista`);
    contadorRechazados ++;
 }
 nombre = prompt("Nombre:");

}

if(nombre !== null){
    console.log("Nombre: fin")
}

console.log(`Entraron: ${contadorEntrada}`);
console.log(`Rechazados: ${contadorRechazados}`);