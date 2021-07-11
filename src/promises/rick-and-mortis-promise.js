const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
	.then((data) => {
		console.log(data.info.count);
		// nueva petición consultando al primer personaje
		return fetchData(`${API}${data.results[0].id}`);
	})
	.then((data) => {
		console.log(data.name);
		//consultando el origin para mostrar la dimension
		return fetchData(data.origin.url);
	})
	.then((data) => {
		// mostrando la dimension
		console.log(data.dimension);
	})
	.catch((error) => {
		console.error(error);
	});
