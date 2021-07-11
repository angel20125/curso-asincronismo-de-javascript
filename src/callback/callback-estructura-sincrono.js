//          ==Ejemplo de callbacks síncronos==

/**
 * Función que se encarga de sumar dos números
 * @param {*} num1: valor entero
 * @param {*} num2 : valor entero
 * @returns  result : retorna el resultado la suma de num1 más num2
 */
function sum(num1, num2) {
	let resultSum = num1 + num2;
	return resultSum;
}

/**
 * Función que se encarga de recibir los parámatros
 *  y hacer la llamada de los callback
 * @param {*} num1
 * @param {*} num2
 * @param {*} callback
 */
function calc(num1, num2, callback) {
	return callback(num1, num2);
}

let result = calc(1, 2, sum);
console.log(`el valor de la suma es ${result}`);
