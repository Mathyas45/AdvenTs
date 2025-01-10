// Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
// pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. 
// Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

// Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) 
// y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
const gifts1 = [3, 1, 2, 3, 4, 2, 5]


function prepareGifts(gifts: number[]): number[] {
      for (let i = 0; i < gifts.length; i++) {
            for (let j = i + 1; j < gifts.length; j++) {
                  if (gifts[i] === gifts[j]) {
                        gifts.splice(j, 1)
                        j--
                  }
            }
      }
      return gifts.reverse().sort((a, b) => a - b)
   
  }
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1)