/*Escribe una función que reciba una cadena de texto como parámetro y devuelva la cantidad de vocales que contiene. */

function countVocals(str) {
    let vocals = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vocals++;
        }
    }
    return vocals;
};

console.log(countVocals('hola soy un ejemplo de'));