// ¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
// Santa Claus ha organizado unas emocionantes carreras de renos para decidir
//  cuáles están en mejor forma.

// Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato
//  isométrico.

// La información que recibes:

// indices: Un array de enteros que representan el progreso de cada reno
//  en la pista:
// 0: El carril está vacío.
// Número positivo: La posición actual del reno desde el inicio de la pista.
// Número negativo: La posición actual del reno desde el final de la pista.
// length: La longitud de cada carril.
// Devuelve un string que represente la pista de la carrera:

// Cada carril tiene exactamente length posiciones llenas de nieve (~).
// Cada reno se representa con la letra r.
// Los carriles están numerados al final con /1, /2, etc.
// La vista es isométrica, por lo que los carriles inferiores están desplazados
//  hacia la derecha.
// Ejemplos:

// drawRace([0, 5, -3], 10)
// /*
//   ~~~~~~~~~~ /1
//  ~~~~~r~~~~ /2
// ~~~~~~~r~~ /3
// */

// drawRace([2, -1, 0, 5], 8)
// /*
//    ~~r~~~~~ /1
//   ~~~~~~~r /2
//  ~~~~~~~~ /3
// ~~~~~r~~ /4
// */

// /*
//   ~~~r~~~~~~~~ /1
//  ~~~~~~~r~~~~ /2
// ~~~~~~~~~~r~ /3
// */

function drawRace(indices: number[], length: number): string {
    let contador = 1
    let reno = 'r'
    let carril = '';
    let indice_mayor = indices.length
    for (let i = 0; i < indices.length; i++) {
        let espacio_inicial = ' '.repeat(indice_mayor - i - 1)
        let salto_linea = i === indices.length - 1 ? '' : '\n'
        if (indices[i] > 0) {
            carril += espacio_inicial+'~'.repeat(0+indices[i]) + reno + '~'.repeat(length - indices[i] - 1) +' '+ '/' + contador+++ salto_linea
        } else if (indices[i] < 0) {
            carril += espacio_inicial+'~'.repeat(length + indices[i]) + reno + '~'.repeat(0 - indices[i] - 1)+' ' + '/' + contador+++ salto_linea
        }else{
            carril +=espacio_inicial+ '~'.repeat(length) +' '+ '/' + contador+++ salto_linea
        }
    }
    // Code here
    return carril
}
console.log(drawRace([3, 7, -2], 11))








// let numero1:number = 5;
// let numero2:number = 4;
// let suma = numero1 + numero2;
// console.log(suma);

// let multplicacion = 5 * 3;
// // console.log(multplicacion);


// function multiplicacion_de_dos_numeros(a: number, b: number): number 
