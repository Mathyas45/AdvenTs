// Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller.
//  Cada bota se describe por dos valores:

// type indica si es una bota izquierda (I) o derecha (R).
// size indica el tamaño de la bota.
// Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha.
//  Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

// ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

// const shoes = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'R', size: 42 },
//   { type: 'I', size: 41 },
//   { type: 'I', size: 42 }
// ]

// organizeShoes(shoes)
// // [38, 42]

// const shoes2 = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 }
// ]

const shoes3 = [
  { type: 'I', size: 37 },
  { type: 'R', size: 37 },
  { type: 'I', size: 37 },
  { type: 'R', size: 37 },
  { type: 'I', size: 38 }
]

// // [38, 38]

type Shoe = {
    type: 'I' | 'R'
    size: number
}
// function organizeShoes(shoes: { type: string; size: number }[]): number[] {
//     let izquierdos: number[] = []; // Lista para tallas de tipo 'I'.
//     let derechos: number[] = []; // Lista para tallas de tipo 'R'.
//     const result: number[] = []; // Resultado final con los pares.

//     // Clasificamos los zapatos según su tipo.
//     for (const { type, size } of shoes) {
//         if (type === 'I') {
//             izquierdos.push(size);
//         } else if (type === 'R') {
//             derechos.push(size);
//         }
//     }

//     // Buscamos pares entre los zapatos izquierdos y derechos.
//     for (const size of izquierdos) {
//         const index = derechos.indexOf(size); // Verificamos si hay un zapato derecho del mismo tamaño.
//         if (index !== -1) {
//             result.push(size); // Agregamos el tamaño total del par.
//             derechos.splice(index, 1); // Quitamos el zapato derecho usado.
//         }
//     }

//     return result;
// }



function organizeShoes(shoes: { type: string; size: number }[]): number[] {
    let izquierdos: number[] = []; // Lista para tallas de tipo 'I'.
    let derechos: number[] = []; // Lista para tallas de tipo 'R'.
    const result: number[] = []; // Resultado final con los pares.

    for(let i=0; i<shoes.length; i++){
        const item = shoes[i];
        const { type, size } = item; // Extraemos el tipo y el tamaño.
        if(type === 'I'){
            izquierdos.push(size);
        } else if(type === 'R'){
            derechos.push(size);
        }
    }
    for(let i=0; i<izquierdos.length; i++){
        const size = izquierdos[i];
        console.log(size)
        const index = derechos.indexOf(size);
        // console.log(index)
        if(index !== -1){
            result.push(size);
            derechos.splice(index, 1);
        }
    }
    return result;
        
}
organizeShoes(shoes3)
console.log(organizeShoes(shoes3))