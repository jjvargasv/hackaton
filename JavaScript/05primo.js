/* Escribe una función que reciba un número como parámetro y determine si es un número primo. Devuelve true si es primo y false si no lo es. 
No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.  */

function primo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}   

console.log(primo(7));