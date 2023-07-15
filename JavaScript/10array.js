/* Escribe una función que reciba un número entero positivo n como parámetro y devuelva un array con todos los números primos menores o iguales a n.  */

    function primosMenores(n) {
        let primos = [];
    
        for (let i = 2; i <= n; i++) {
            if (esPrimo(i)) {
                primos.push(i);
            }
        }
    
        return primos;
    }
    
    function esPrimo(num) {
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    
        return num > 1;
    }
    
  
  

    
console.log(primosMenores(10));

