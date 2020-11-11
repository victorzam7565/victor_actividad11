// Suma
const a=100;
const b=200;
const suma=a+b
alert("El resultado de la suma es: "+ suma);
// Resta
const x=15;
const y=5;
const resta=x-y;
alert("El resultado de la resta es: "+ resta);
// Mayusculas y Minusculas
const mensaje = "La Voz De Tu Cabeza Siempre Tiene El Mismo Volumen";
console.log(mensaje); //Sin cambios
console.log(mensaje.toUpperCase()); //Trasnformado a mayúsculas
console.log(mensaje.toLowerCase()); //Trasnformado a minúsculas
// Quitando espacios vacios
const texto = "    No puedes hacerte cosquillas a ti mismo   ";
console.log(texto);
console.log(texto.trim());
// Separar palabras
const animales = "Tigre Oso Ballena Hormiga Lagarto";
const arreglo = animales.split(" ");
console.log(animales);
console.log(arreglo);
// Separar Correo
const email = "correo@blenio.com";
console.log(email);
console.log(email.split("@"));