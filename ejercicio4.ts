// ¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial.}
//  Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y 
// un carácter especial para decorarlo.

// La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

// El árbol está compuesto de triángulos de caracteres especiales.
// Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
// Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
// El árbol siempre debe tener la misma longitud por cada lado.
// Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
// Ejemplos:

const tree = createXmasTree(3, '*')
console.log(tree)
// /*
// ____*____
// ___***___
// __*****__
// _*******_
// *********
// ____#____
// ____#____
// */

// const tree2 = createXmasTree(3, '+')
// console.log(tree2)
// /*
// __+__
// _+++_
// +++++
// __#__
// __#__
// */

// const tree3 = createXmasTree(6, '@')
// console.log(tree3)
// /*
// _____@_____
// ____@@@____
// ___@@@@@___
// __@@@@@@@__
// _@@@@@@@@@_
// @@@@@@@@@@@
// _____#_____
// _____#_____
// */
// Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.

function createXmasTree(height: number, ornament: string): string {
    /* Code here */
    let anchura_maxima_arbol = 0
    let altura_arbol = height
    let tronco = 2
    let dibujar_restante_tronco = ''
    let espacio_delante = ''
    let espacio_atras = ''
    let resultado = ''
    
    anchura_maxima_arbol = altura_arbol * 2 - 1
    for (let i = 0; i < altura_arbol; i++) {
        espacio_delante = '_'.repeat((anchura_maxima_arbol - 2 * i - 1)/2)
        espacio_atras = '_'.repeat((anchura_maxima_arbol - 2 * i - 1)/2)
        let arbol = espacio_delante+ornament.repeat(1 + 2 * i)+espacio_atras; // Cambia el cálculo para empezar desde el menor.
        resultado += arbol + '\n';
    }
    for (let i = 0; i < tronco; i++) {
        let agregar_salto = i === 0 ? '\n' : '';
        dibujar_restante_tronco = '_'.repeat((anchura_maxima_arbol - 1)/2)
        resultado += dibujar_restante_tronco + '#' + dibujar_restante_tronco + agregar_salto 
    }

    return resultado
  }