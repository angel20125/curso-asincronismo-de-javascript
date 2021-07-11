//          ==Ejecución asincrona de los callback==

////////////////////////////////
//          ==Ejemplo 1==
////////////////////////////////
console.log('Inicio, Ejecución principal del programa');

setTimeout(() => {
	console.log(`....Ejecutando instrucciones,
     en la cola de tarea. Intrucción  5`);
}, 2000); // Esta linea de código, está en la  cola de tareas

setTimeout(() => {
	console.log(`....Ejecutando instrucciones,
     en la cola de tarea. Instrucción 6`);
}, 2000); // Esta linea de código, está en la  cola de tareas

for (let index = 0; index < 5; index++) {
	console.log('Instrucción número ' + index);
}

console.log('Fin de la Ejecucion principal del programa');

////////////////////////////////
//          ==Ejemplo 2==
////////////////////////////////
function date(callback) {
	//se imprime una fecha
	console.log(new Date());

	// llamdo a la función callback, en 3s para imprimir  la fecha
	setTimeout(() => {
		let date = new Date();
		callback(date);
	}, 3000);
}

function printDate(dateNow) {
	console.log(dateNow);
}

date(printDate);
