// Los elfos están jugando con un tren 🚂 mágico que transporta regalos.
//  Este tren se mueve en un tablero representado por un array de strings.

// El tren está compuesto por una locomotora (@), seguida de sus vagones (o),
//  y debe recoger frutas mágicas (*) que le sirve de combustible.
//  El movimiento del tren sigue las siguientes reglas:

// Recibirás dos parámetros board y mov.

// board es un array de strings que representa el tablero:

// @ es la locomotora del tren.
// o son los vagones del tren.
// * es una fruta mágica.
// · son espacios vacíos.
// mov es un string que indica el próximo movimiento del tren
//  desde la cabeza del tren @:

// 'L': izquierda
// 'R': derecha
// 'U': arriba
// 'D': abajo.
// Con esta información, debes devolver una cadena de texto:

// 'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
// 'eat': Si el tren recoge una fruta mágica (*).
// 'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
// Ejemplo:

// // ➞ 'eat'
// // Porque el tren se mueve hacia arriba y encuentra una fruta mágica

// console.log(moveTrain(board, 'D'))
// // ➞ 'crash'
// // El tren se mueve hacia abajo y la cabeza se choca consigo mismo

// console.log(moveTrain(board, 'L'))
// // ➞ 'crash'
// // El tren se mueve a la izquierda y se choca contra la pared

// console.log(moveTrain(board, 'R'))
// // ➞ 'none'
// // El tren se mueve hacia derecha y hay un espacio vacío en la derecha
const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'L'))

type Board = string[]
type Movement = 'U' | 'D' | 'R' | 'L'
type Result = 'none' | 'crash' | 'eat'

function moveTrain(board: Board, mov: Movement): Result {

    for(let i = 0; i < board.length; i++){
      if (board[i].includes("@")) {
        const index = board[i].indexOf("@");
        let row = 5;
        switch (mov) {
          case "U":
            if (i - 1 < 0) {
              return "crash";
            }else{
              if (board[i - 1][index] === "*") {
                return "eat";
              }else if (board[i - 1][index] === "o") {
                return "crash";
              }else {
                return "none";
              }
            }
          case "D":
            if (i+1 >= board.length) {
              return "crash";
            }else{
              if (board[i + 1][index] === "*") {
                return "eat";
              }else if(board[i + 1][index] === "o"){
                return "crash";
              }else {
                return "none";
              }
            }
          case "R":
            if (index + 1 > board[i].length) {
              return "crash";
            }else{
              if (board[i][index + 1] === "*") {
                return "eat";
              }else if(board[i][index + 1] === "o"){
                return "crash";
              } else {
                return "none";
              }
            }
          case "L":
            if (index - 1 < 0) {
              return "crash";
            }else{
              if (board[i][index - 1] === "*") {
                return "eat";
              }else if(board[i][index-1] ==="o"){
                return "crash";
              } else {
                return "none";
              }
            }
        }
      }
    }
    return "none";
}
