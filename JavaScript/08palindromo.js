/* Escribe una función que reciba una cadena de texto como parámetro y determine si es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha y de derecha a izquierda, ignorando los espacios y las mayúsculas/minúsculas */

function esPalindromo(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    let length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return 'NO es palindromo';
        }
    }
    return 'SI es palindromo';
}


let texto = "Anita lava la tinas";
console.log(esPalindromo(texto)); 

       
  
