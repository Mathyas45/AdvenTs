// El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado los nombres
// de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y
//  necesitan tu ayuda para descifrar los nombres.

// Cada archivo sigue este formato:

// Comienza con un número (puede contener cualquier cantidad de dígitos).
// Luego tiene un guion bajo _.
// Continúa con un nombre de archivo y su extensión.
// Finaliza con una extensión extra al final (que no necesitamos).
// Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9),
// otros guiones bajos (_) y guiones (-).

// Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y
//  devuelva solo la parte importante: el nombre del archivo y su extensión.

// Ejemplos:
// console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa'))
// // ➞ "sleighDesign.png"

// console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023'))
// // ➞ "chimney_dimensions.pdf"

console.log(decodeFilename('987654321_elf-roster.csv.tempfile'))
// // ➞ "elf-roster.csv"

function decodeFilename(filename: string): string {
    // Code here
        let primera_parte = filename.indexOf('_')
        let dimension = filename.indexOf('.', primera_parte);
        const palabras = filename.substring(primera_parte + 1, dimension);
        let segunda_parte = filename.indexOf('.')
        let dimension_segunda_parte = filename.indexOf('.', segunda_parte + 1);
        
        let palabras_segunda_parte = filename.substring(segunda_parte, dimension_segunda_parte);
        return palabras + palabras_segunda_parte

  }