// Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, 
// pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

// Reglas:

// Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
// Cada nombre debe estar en una línea, alineado a la izquierda.
// El marco está construido con * y tiene un borde de una línea de ancho.
// La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
// Ejemplo de funcionamiento:

createFrame(['midu', 'madeval', 'educalvolpz'])

// // Resultado esperado:
// ***************
// * midu        *
// * madeval     *
// * educalvolpz *
// ***************


function createFrame(names: string[]): string {
      let longitud_maxima = 0;
  
      // Encontrar la longitud máxima
      for (let i = 0; i < names.length; i++) {
          if (names[i].length > longitud_maxima) {
              longitud_maxima = names[i].length;
          }
      }
  
      // Crear los bordes superior e inferior
      const bordes_superior_inferior = '*'.repeat(longitud_maxima + 3);
      let resultado = bordes_superior_inferior + '\n';
  
      // Crear las líneas del marco con los nombres
      for (let j = 0; j < names.length; j++) {
      //     const nombresResult = `* ${names[j].padEnd(longitud_maxima)} *`;
             const nombresResult ='*'+names[j]+' '.repeat(longitud_maxima - names[j].length+1)+'*'
          resultado += nombresResult + '\n';
      }
  
      resultado += bordes_superior_inferior;
  
      return resultado;
  }
console.log(createFrame(['cuya', 'cachetes', 'cuyitaaaaaa']));

  
          
  
    