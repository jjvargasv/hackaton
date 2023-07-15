/* Escribe una función que reciba un array de números ordenados de forma ascendente y devuelva el o los números faltantes en la secuencia. */

function encontrarNumerosFal(array) {
    const numerosFaltantes = [];
     for (let i = 0; i < array.length - 1; i++) {
      const diferencia = array[i + 1] - array[i];
       if (diferencia > 1) {
        for (let j = 1; j < diferencia; j++) {
          numerosFaltantes.push(array[i] + j);
        }
      }
    }
     return numerosFaltantes;
  }
 
  const numeros = [1, 2, 4, 6, 8,10];
  const faltantes = encontrarNumerosFal(numeros);
  console.log(faltantes);