/*
    Salidas: Muestran algo al usuario
    a través de la consola con la
    instrucción console.log(...)

    let edad; Declara la variable edad

    parseInt("560") devuelve 560 como entero
    parseFloat("1.82") devuelve 1.82 como float

    prompt("Pone un dato") retorna el dato del usuario
    como CADENA
*/

let nombre;
let anioNac;
let edad;

nombre = prompt("Como te llamas?");
anioNac = prompt("En qué año naciste?");

anioNac = parseInt(anioNac);

/*
    Esto es un comentario.
    Para obtener el año actual en JavaScript:
    const anioActual = new Date().getFullYear();
*/
edad = 2022 - anioNac;
console.log(anioNac + 4);

console.log("Hola " + nombre + "!!!");
console.log("Tu edad es de " + edad + " años");

