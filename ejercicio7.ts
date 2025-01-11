// ¡El grinch 👹 ha pasado por el taller de Santa Claus!
//  Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, 
// por lo que los envíos no se pueden realizar.

// Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch 
// para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar 
// los paquetes. Las instrucciones que siguen son:

// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido 
// dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados, pero con el 
// contenido volteado correctamente.
// Nos ha dejado algunos ejemplos:

// fixPackages('a(cb)de')
// // ➞ "abcde"
// // Volteamos "cb" dentro de los paréntesis

// fixPackages('a(bc(def)g)h')
// a bcfedg  h
// agdefcbh
// // ➞ "agdefcbh"
// // 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

// fixPackages('abc(def(gh)i)jk')
// abcighfedjk
//"abcighfedjk"


console.log(fixPackages('a(b(c))e'));
// // ➞ "acbe"
// // 1º volteamos "c" → "c", luego "bc" → "cb"
function fixPackages(packages: string): string {
    // Mientras haya paréntesis en la cadena
    while (packages.includes('(')) {
        // Encuentra el último paréntesis abierto y su par cerrado
        const lastOpen = packages.lastIndexOf('('); // Paréntesis más interno
        const firstClose = packages.indexOf(')', lastOpen); // Cerrando el paréntesis interno, last open es el índice de la última aparición de '('

        // Extrae el contenido entre los paréntesis
        const palabras = packages.substring(lastOpen + 1, firstClose);

        // Invierte el contenido
        const reversed = palabras.split('').reverse().join(''); // split convierte el string en un array de caracteres, reverse invierte el array y join lo convierte en un string de nuevo

        // Reconstruye la cadena reemplazando los paréntesis y el contenido procesado
        packages = packages.substring(0, lastOpen) + reversed + packages.substring(firstClose + 1);// substring devuelve una parte de la cadena original entre los índices especificados, 
    }

    return packages;
}
