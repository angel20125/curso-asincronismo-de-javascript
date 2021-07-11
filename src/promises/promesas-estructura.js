////////////////////////////////
// Ejemplo 1, Estructura de una promesa
////////////////////////////////

const somethingWillHapped1 = () => {
	// se instancia una nueva promesa
	return new Promise((resolve, reject) => {
		let response = '';
		if (true) {
			response = 'La promesa tuvo exito😁';
			resolve(response);
		} else {
			response = 'Esta vez la promesa no tuvo exito🥺';
			reject(response);
		}
	});
};

somethingWillHapped1()
	.then((responseSuccess) => console.log(responseSuccess))
	.catch((responseError) => console.error(responseError));

////////////////////////////////
// Ejemplo 2, Estructura de una promesa
// definiendo un new Error
////////////////////////////////

const somethingWillHapped2 = () => {
	// se instancia una nueva promesa
	return new Promise((resolve, reject) => {
		let response = '';
		if (true) {
			response = 'La promesa tuvo exito😁';
			setTimeout(() => {
				resolve(response);
			}, 2000);
		} else {
			response = 'Esta vez la promesa no tuvo exito🥺';
			const error = new Error(response);
			setTimeout(() => {
				reject(error);
			}, 2000);
		}
	});
};

somethingWillHapped2()
	.then((responseSuccess) => console.log(responseSuccess))
	.catch((responseError) => console.error(responseError));

////////////////////////////////
//Ejemplo, promesas emparalelo
////////////////////////////////
Promise.all([somethingWillHapped1(), somethingWillHapped2()])
	.then((responseSuccess) => console.log(responseSuccess))
	.catch((responseError) => console.error(responseError));
