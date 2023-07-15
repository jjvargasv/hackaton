/* 1.	Escribe una función que reciba una cadena de texto como parámetro y verifique si cumple con los siguientes criterios: debe tener al menos 8 caracteres, contener al menos una letra mayúscula, una letra minúscula y un número. 
No está permitido usar expresiones regulares  */

function validarCadena(cadena) {
    if (cadena.length >= 8) {
        let letrasMayusculas = false;
        let letrasMinusculas = false;   
        let numeros = false;
        for (let i = 0; i < cadena.length; i++) {
            if (cadena[i] >= 'A' && cadena[i] <= 'Z') {
                letrasMayusculas = true;
            }
            if (cadena[i] >= 'a' && cadena[i] <= 'z') {
                letrasMinusculas = true;
            }
             if (cadena[i] >= '0' && cadena[i] <= '9') {
                numeros = true;
            }
        }
    
        if (letrasMayusculas && letrasMinusculas && numeros) {
            return true;
        }
        else {
                    return false;
        }
    }
    else {
            return false;
        }
}

console.log(validarCadena("Hola como estas 19"));
