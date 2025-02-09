// Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄.
//  Cada uno viene decorado con una serie de adornos muy peculiares,
//  y el precio del árbol se determina en función de los adornos que tiene.

// *: Copo de nieve - Valor: 1
// o: Bola de Navidad - Valor: 5
// ^: Arbolito decorativo - Valor: 10
// #: Guirnalda brillante - Valor: 50
// @: Estrella polar - Valor: 100
// Normalmente se sumarían todos los valores de los adornos y ya está…

// Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor,
//  en lugar de sumar, se resta su valor.

// calculatePrice('***')  // 3   (1 + 1 + 1)
// calculatePrice('*o')   // 4   (5 - 1)
// calculatePrice('o*')   // 6   (5 + 1)
// calculatePrice('*o*')  // 5  (-1 + 5 + 1) 
// calculatePrice('**o*') // 6  (1 - 1 + 5 + 1) 
// calculatePrice('o***') // 8   (5 + 3)
// calculatePrice('*o@')  // 94  (-5 - 1 + 100)
// calculatePrice('*#')   // 49  (-1 + 50)
// calculatePrice('@@@')  // 300 (100 + 100 + 100)
// calculatePrice('#@')   // 50  (-50 + 100)
console.log(calculatePrice('#**'))  // undefined (Z es desconocido)


function calculatePrice(ornaments: string): number {
    let copo_nieve = 1
    let bola_navidad = 5
    let arbolito_decorativo = 10
    let guirnalda_brillante = 50
    let estrella_polar = 100
    let total = 0
    
    if(ornaments.includes('Z')){
        return 0
    }
    for(let i = 0; i < ornaments.length; i++){
        if(ornaments[i] === '*'){
            total += copo_nieve
        }else if(ornaments[i] === 'o'){
            total += bola_navidad
        }else if(ornaments[i] === '^'){
            total += arbolito_decorativo
        }else if(ornaments[i] === '#'){
            total += guirnalda_brillante
        }else if(ornaments[i] === '@'){
            total += estrella_polar
        }
        if(i > 0){
            if(ornaments[i] === '#' && ornaments[i-1] === '@'){
                total -= estrella_polar
            }else if(ornaments[i] === '^' && (ornaments[i-1] ===  '#' || ornaments[i-1] === '@')){
                total -= bola_navidad
            }else if(ornaments[i] === 'o' && (ornaments[i-1] === '^' || ornaments[i-1] === '#' || ornaments[i-1] === '@')){
                total -= arbolito_decorativo
            }else if(ornaments[i] === '*' && (ornaments[i-1] === 'o' || ornaments[i-1] === '^' || ornaments[i-1] === '#' || ornaments[i-1] === '@')){
                total -= bola_navidad
            }
        }else{
            if(ornaments[i] === 'o' && ornaments[i+1] === '*'){
                total -= bola_navidad
            }else if(ornaments[i] === '^' && (ornaments[i+1] === '*' || ornaments[i+1] === 'o')){
                total -= arbolito_decorativo
            }else if (ornaments[i] === '#' && (ornaments[i+1] === '*' || ornaments[i+1] == '^' || ornaments[i+1] === 'o') ){
                total -= guirnalda_brillante
            }else if(ornaments[i] === '@' && (ornaments[i+1] === '*' || ornaments[i+1] == '^' || ornaments[i+1] === 'o' || ornaments[i+1] === '#')){
                total -= estrella_polar
            }
        }
    }
    return total
}