
/*
// CON WHILE
let veces = 5;
let contador = 1;

while (contador <= veces) {
    console.log(contador + " Hola mundo de los ciclos");
    contador = contador + 1;
}
console.log("Adiós");
*/

/*
let veces = 5;
// contador++ es lo mismo que poner contador = contador + 1;

for (let cont = 1; cont <= veces; cont = cont + 1) {
    console.log(cont + " Hola mundo de los ciclos (con for)");
}
*/

/* El usuario ingresa cuatro números. La computadora dice
 cuál fue el mayor (se supone único) y en que pos apareció
 Ejemplo --> Ingresa 4 7 5 3. El mayor fue 7 en la pos 2 */

 /*
let numero;
let maximo = Number.MIN_SAFE_INTEGER; // El menor valor posible
let posMaximo;
for (let cont = 1; cont <= 4; cont++) {
    numero = parseInt(prompt("Poné un número entero"));
    if (numero > maximo) {
        maximo = numero;
        posMaximo = cont;
    }
}
console.log("El máximo fue " + maximo + " en la pos " + posMaximo);
*/

/*
let numero;
let maximo = parseInt(prompt("Poné un número entero"));
let posMaximo = 1;
for (let cont = 2; cont <= 4; cont++) {
    numero = parseInt(prompt("Poné un número entero"));
    if (numero > maximo) {
        maximo = numero;
        posMaximo = cont;
    }
}
console.log("El máximo fue " + maximo + " en la pos " + posMaximo);
*/

/* El usuario ingresa su edad (entre 1 y 120) */

/*let edad = parseInt(prompt("Ingresá tu edad (entre 1 y 120)"));
while ( edad < 1 || edad > 120 ) {
    edad = parseInt(prompt("ERROR. Ingresá tu edad (entre 1 y 120)"));
}
console.log("La edad fue validada. Es: " + edad);*/

// Con WHILE (Ciclo de 0..n)
/*let genero = prompt("Ingresá tu género (M o F)").toUpperCase();
while ( !(genero == "M" || genero == "F") ) {
    genero = prompt("ERROR. Ingresá tu género (M o F)").toUpperCase();
}
console.log("El género fue validado. Es: " + genero);
*/

// Con DO-WHILE (Ciclo de 1..n)
let genero;
do {
    genero = prompt("Ingresá tu género (M o F)").toUpperCase();
} while(!(genero == "M" || genero == "F"));
console.log("El género fue validado. Es: " + genero);

// Ley de De Morgan
// !(genero == "M" || genero == "F")
// genero != "M" && genero != "F"