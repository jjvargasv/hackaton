/* Escribe una función que reciba un array de números ordenados de forma ascendente y devuelva el o los números faltantes en la secuencia. */

function encontrNumerFal(array) {
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
 

  const faltantes = encontrNumerFal([1, 2, 4, 6, 7,8,10]);
  console.log(faltantes);