/* Escribe una función que reciba una cadena de texto como parámetro y devuelva la palabra más larga encontrada en la cadena.  */

function palabraLarga(cadena) {
    let palabras = cadena.split(" ");
    let palabraMasLarga = "";
    for (let    i = 0; i < palabras.length; i++) {
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
      }
    }
    return palabraMasLarga;
  }
   
  let   texto = "Hola, estoy haciendo pruebas";
  let   palabraMasLarga = palabraLarga(texto);
  console.log(palabraMasLarga); 

