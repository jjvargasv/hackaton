/* Escribe una función que reciba dos cadenas de texto como parámetros y determine si son anagramas. Dos palabras son anagramas si tienen las mismas letras, pero en diferente orden. */

function esAnagrama(palabra, posibleAnagrama){
    
    palabra = palabra.toLowerCase();
    posibleAnagrama = posibleAnagrama.toLowerCase();
    palabra = palabra.split("");
    posibleAnagrama = posibleAnagrama.split("");
    palabra = palabra.sort();
    posibleAnagrama = posibleAnagrama.sort();
    palabra = palabra.join("");
    posibleAnagrama = posibleAnagrama.join("");
    
    if(palabra === posibleAnagrama){
      return 'Si es anagrama';
    }else{
      return 'No es anagrama';
    }
  }

console.log(esAnagrama("Desamparador", "desparramado"));