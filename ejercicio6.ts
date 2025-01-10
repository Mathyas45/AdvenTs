// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo,
//  representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. 
// Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

// Ejemplos:

// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) // ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) // ➞ true

// inBox([
//   "#####",
//   "#   #",
//   "#  #*",
//   "#####"
// ]) // ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) // ➞ false

// /** @param {string[]} box
//  *  @returns {boolean} True if the gift is inside the box
//  */
function inBox(box: string[]): boolean {
    for(let i = 0; i < box.length; i++){
      let border = box[i]
      let primera_fila = box[0]
      let ultima_fila = box[box.length-1]

      if(primera_fila.includes('*') || ultima_fila.includes('*')){
        return false
      }else{
        if(border[0] === '*' || border[border.length-1] === '*'){
            return false
        }
        if(border.includes('*')){
            return true
        }
      }
    }
    return false
    }
    console.log(inBox([
        "###",
        "# *",
        "# #",
        "###"
    ])) // ➞ true

    let edades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  