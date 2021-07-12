const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const getInformationAPI = async function (url_api) {
	try {
		//1. Se obtienen todos los personajes
		//2. Se obtiene el primer personaje
		//3. Se obtiene la dimensión del personaje

		const data = await fetchData(url_api); //1.
		const character = await fetchData(`${API}${data.results[0].id}`); //2.
		const origin = await fetchData(character.origin.url); //3.

		console.log(data.info.count);
		console.log(character.name);
		console.log(origin.dimension);
	} catch (error) {
		console.error(error);
	}
};

// llamad de nuestra fución
getInformationAPI(API);

///////////////
// Esta es una forma de hacer que async/await
//espere a varios llamados al vez:
///////////////

async function foo() {
	const [characters, episodes, locations] = await Promise.all([
		getCharacters(),
		getEpisodes(),
		getLocations(),
	]);

	console.log(characters);
	console.log(episodes);
	console.log(locations);
}
