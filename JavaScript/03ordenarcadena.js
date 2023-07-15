/*Escribe una función que reciba una cadena de texto con varias palabras separadas por espacios y devuelva la cadena de texto con las palabras ordenadas alfabéticamente. */

function ordenaPalabra(cadena) {
    let palabras = cadena.split(" ");
    palabras.sort();
    return palabras.join(" ");
}

let texto = "hola soy un ejemplo de texto";

console.log(ordenaPalabra(texto));

