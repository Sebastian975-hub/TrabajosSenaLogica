const nombre = prompt("Digite su Nombre");
const estatura = parseInt(prompt("Digite su estatura"));
const alturaMinima = 165;

if(estatura > alturaMinima){
    console.log("Se llama: " + nombre);
   } else {
    console.log("Altura limite no alcanzada")
   }
