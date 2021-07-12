const promesa = function () {
	return new Promise((resolve, reject) => {
		true
			? resolve('promesa cumplida 😁')
			: reject(new Error('promesa No cumplida 🥺'));
	});
};

// Es importante que para usar   async  function
// para poder usar await
const mostrarEstadoDeLaPromesa = async function () {
	// para poder capturar el error se usa la estructura try-catch
	try {
		const respuesta = await promesa();
		console.log(respuesta);
	} catch (error) {
		console.log(error);
	}
};

console.log('Se cumplio la promesa');
mostrarEstadoDeLaPromesa();
