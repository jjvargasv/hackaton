/*Escribe una función que reciba una cadena de texto con varias palabras separadas por espacios y devuelva la cadena de texto con las palabras ordenadas alfabéticamente. */

function ordenarPalabras(cadena) {
    var palabras = cadena.split(" ");
    palabras.sort();
    return palabras.join(" ");
}

texto = "Hola soy un ejemplo de texto"
texto_ordenado = ordenarPalabras(texto);
console.log(texto_ordenado);

