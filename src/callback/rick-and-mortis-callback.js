// instanciamos XMLHttpRequest
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Se guarda la url de consulta
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData(url_api, callback) {
	let xhttp = new XMLHttpRequest();
	// Se abre una conexión  para realizar una petición con  el objeto xhttp
	xhttp.open('GET', url_api, true);

	//se verifica si hubo cambio en xhttp para así ejecutar una función
	xhttp.onreadystatechange = function (event) {
		// El primer if se valida el estado de xhttp
		// El segundo if valida el status de la respuesta del servidor
		if (xhttp.readyState === 4) {
			if (xhttp.status === 200) {
				// El entorno de node tiene un estándar para
				// los callback el primer parámetro se envía
				// el error, como no hay se coloca null
				// segundo parámetro es el resultado  del
				// llamado de la api. y en este caso se parse a jason
				callback(null, JSON.parse(xhttp.responseText));
			} else {
				// si no es 200, entonces se envia el error y la información
				// como no hay información se coloca null
				const error = new Error('Erro ' + url_api);
				return callback(error, null);
			}
		}
	};

	// se envia la petición
	xhttp.send();
}

//Consulta la cantidad de personajes
fetchData(API, function (error1, data1) {
	if (error1) return console.log(error1);

	//consulta datos del primer personaje
	fetchData(API + data1.results[0].id, function (error2, data2) {
		if (error2) return console.error(error2);

		// consulta la dimensión del persoja
		fetchData(data2.origin.url, function (error3, data3) {
			if (error3) return console.log(error3);

			console.log('total de personajes ' + data1.info.count);
			console.log('primer personaje ' + data2.name);
			console.log('Dimensión a la que pertenece' + data3.dimension);
		});
	});
});
