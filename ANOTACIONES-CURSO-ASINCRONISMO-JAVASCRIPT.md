# Capítulo I: Curso de asincronismo javascript

# Apropiar los conceptos de asincronismo

## 1. ¿Qué es un lenguaje no bloqueante?

En JavaScript casi todas las operaciones de I/O (Entrada y Salida) no se bloquean. A esto se le conoce como asíncronismo. Lo único que no es procesado antes de que termine la operación son los callbacks, ya que estos están amarrados a una operación y esperan a que sea finalizada para poder ejecutarse.

Para que puedan entender mejor. Vamos a poner un ejemplo de la vida real:

Imagina que te levantas una mañana a preparar tu desayuno. Primero decides tostar tu pan y luego prepararás tu avena. Si fuera una persona síncrona (Blocking) tendrías que esperar a tostar tu pan para recién preparar tu avena. Pero si fuera una persona asíncrona (Non Blocking) luego de poner a tostar tu pan, vas preparando tu avena. La acción de que salga tu pan de la tostadora sería un callback que está esperando que finalice el proceso para ejecutarse. Pero otros procesos (como preparar tu avena) ya podrían irse realizando.

## 2. Introducción al asincronismo

### ¿Qué es Asincronismo?

Qué es el asincronismo en JavaScript, vamos a recurrir al término técnico de JavaScript es un lenguaje de programación asíncrono y no bloqueante que utiliza un manejador de eventos conocido como Event loop implementado en un único hilo para sus interfaces de entrada y de salida.

Entonces, ¿Qué es a sincronismo?, En simples palabras Es la acción que no ocurre al mismo tiempo.

### ¿Cómo JavaScript maneja el Asincronismo?

JavaScript se puede ver como un aeropuerto, en donde la pista es el thread (hilo principal de ejecución), y la torre de control es el EventLoop se encarga de ver que aviones salen y entra.

Como JavaScript es un lenguaje bloqueante y maneja un solo hilo por ende, tenemos una entrada que va hacia su salida, relacionando el aeropuerto con el asincronismo, lo que se puede ver es que no se va a permitir recibir dos aviones, ni tampoco despacharlos al mismo tiempo

Es importante resaltar que los callback que se encuentran en la cola de tareas no se ejecutarán hasta que se vacíe la pila de ejecución

Referencia:

-   [Cómo funciona el asincronismo en JavaScript - YouTube](https://www.youtube.com/watch?v=bWvnWhVCHAc)
-   [https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop](https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop)

### Términos que nos encontraremos como desarrollador Memory Heap, call stack, call Queque

este lenguaje Uno de ellos es él

-   Event Loop
    Es el Encargado de administrar el ciclo de funcionamiento de javascript. El event loop se encarga de realizar las ejecuciones de las funciones de la pila de llamadas (call stack) una vez que este se vacía, es decir, no hay nada más que ejecutar, se procesan los mensajes de la cola tareas (call Queque). Con cada ‘tick’ del bucle de eventos, se procesa un nuevo
    mensaje.

-   Memory heap
    Que es el espacio memoria compartido para toda nuestra aplicación.

-   Call Stack
    pila de ejecución donde nuestras funciones van a hacer puestas en ejecución.

-   Call Queque
    también vamos a tener nuestra cola de tareas. Aquí van a parar los callback las funciones o peticiones a un servidor, las interacciones con el DOM, cambio de algún elemento gráfico, es decir Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al de la aplicación, el mensaje se inserta en una cola de mensajes pendientes y se registra su callback correspondiente.

-   A.P.I
    Interfaz de programación de aplicaciones (Application Programming Interface). Es un conjunto de rutinas que provee acceso a funciones de un determinado software.

-   Concurrencia
    Cuando dos o más tareas progresan simultáneamente.

-   Paralelismo
    Cuando dos o más tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.

-   Bloqueante:
    Una llamada u operación bloqueante no devuelve el control a nuestra aplicación hasta que se ha completado. Por tanto el thread queda bloqueado en estado de espera.

-   Síncrono:
    Es frecuente emplear ‘bloqueante’ y ‘síncrono’ como sinónimos, dando a entender que toda la operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que se complete para procesar el resultado.

-   Asíncrono:
    La finalización de la operación I/O se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.

-   Hoisting:
    Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del
    código en tiempo de compilación.

-   DOM:
    El Modelo de objetos de documento ( DOM ) conecta las páginas web con scripts o lenguajes de programación al representar la estructura de un documento, como el HTML que representa una página web, en la memoria. Por lo general, se refiere a JavaScript, aunque el modelado de documentos HTML, SVG o XML como objetos no forman parte del lenguaje JavaScript central.
    El DOM representa un documento con un árbol lógico. Cada rama del árbol termina en un nodo y cada nodo contiene objetos. Los métodos DOM permiten el acceso L.

-   XML
    Lenguaje de marcado creado para la transferencia de información, legible tanto para seres
    humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida
    sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del
    primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de
    XML.

-   Events
    Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar
    una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una
    opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.

-   Compilar
    Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como
    la máquina virtual de Java.

-   Transpilar
    Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el original.

## 3. Presentación del reto

-   El proyecto consiste en consumir una api en este caso la de rick and mortis
-   Se obtendrá la lista completa de personajes.
-   Luego tomar a un personaje (el primero que nos regrese después de una consulta) y ver que dimensión pertenece ese personaje
-   Usar esta api tres veces en cada uno de los anteriores ejecercio, primero se le aplicará callback, luego promesa, y por último async await.

lista de api públicas
[https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

[The Rick and Morty API](https://rickandmortyapi.com)

# Capítulo II: Desarrollar soluciones utilizando asicronismo

## 4. Definición Estructura Callback

### Función Callback

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Ejemplo:

Ejecución síncrona de un callback

```javascript
function saludar(nombre) {
	alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
	var nombre = prompt('Por favor ingresa tu nombre.');
	callback(nombre);
}

procesarEntradaUsuario(saludar);
```

```javascript
//       ===Ejemplo de callbacks síncronos===

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
```

Ejecución asíncrona de un callback

```javascript
// Ejecución asincrona de los callback

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
```

El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación a sincrónica — estas se denominan devoluciones de llamada asincrónicas.

### Iniciar proyecto

-   Iniciar repositorio de git
-   Iniciar npm
-   Contestar las preguntas que realiza npm para agregar más detalles a nuestro proyecto

```sh
 git  init
 npm init
package name: (curso-asincronismo-de-javascript)
version: (1.0.0)
description: trabajar con asincronismo con JavaScript
entry point: (index.js) src/index.js
test command:
git repository: (https://github.com/angel20125/curso-asincronismo-de-javascript.git)
keywords: callback, promise, async-await
author: Angel Quintero
license: (ISC) MIT
About to write to /home/me_angel/platzi-pj/escuela-javascript/curso-asincronismo-de-javascript/package.json
```

El uso de npm init desde la línea de comandos inicializa el archivo package.json del proyecto. En este archivo hay información sobre el proyecto en sí, como el nombre y el número de versión. Junto a esta información se enumeran las dependencias del proyecto.

Las dependencias son paquetes que el proyecto requiere para funcionar correctamente. Incluirlos en el archivo package.json permite instalarlos antes de construir el proyecto. El archivo package.json generado al llamar a npm init debe estar escrito en formato JSON.

Preguntas y respuestas de ejecutar npm init

### Ejecutar código con npm

Una vez inicializado el proyecto se puede ejecutar el código configurando en el package.json un script.

```json
"scripts": {
"callback": "node src/callback/1-definicion-estructura-callback.js",
"test": "echo \"Error: no test specified\" && exit 1"
}
```

En la sección de script agreamos un script llamado "callback" y le indicamos que se ejecutará con node y la dirección del archivo luego en la terminal ejecutamos

```sh
npm run callbacks
```

Referencias

-   [Cómo usar y para que sirve npm init](https://careerkarma.com/blog/npm-init/)

## 5. Peticiones a APIs usando Callbacks

### Característica del protocolo http

#### Verbos

Los verbos, los verbos indican acciones, estás acciones están asociadas a peticiones y recursos. En línea general sirve para la manipulación de recursos cliente/servidor. Los códigos de estados, los códigos son valores números que tienen un valor semántico.
estos Verbos http son:

-   GET, Sirve para solicitar recurso.
-   HEAD, Sirve para solicitar recurso, pero este no retorna información, la estructura de esta petición e igual que get tanto en su headers como estatus. Es útil cuando vamos a utilizar API, para comprobar si lo que vamos a enviar esta correcto y puede ser procesado.
-   POST, sirve para la creación de recursos en el servidor. Ejemplo un comentario en un blog.
-   PUT, Sirve actualizar por completo un recurso. El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
-   PATCH, Sirve para actualizar parcialmente un recurso.
-   DELETE, sirve para eliminar un recurso.

#### Los códigos de estados del servidor

Otra de las cosas que especifica el protocolo HTTP son el código de estado (status codes). Sirven para describir el estado de la petición hecha al servidor.

-   1xx, Indican que la petición fue recibida por el servidor, pero está siendo procesada por el servidor. es decir, no fue exitosa ni fue errónea, sino que está siendo procesada aun.
-   2xx, Indican que la petición fue recibida, aceptada y procesada correctamente.
-   3xx, Indican que hay que tomar acciones adicionales para completar la solicitud. Por lo general estos códigos indican redirección. En las API no se usan redirecciones porque no contienen estados, es decir, toda la información está contenida en una solicitud, no se guarda un estado en el servidor como una sesión por ejemplo.
-   4xx, Errores del lado del cliente, Indica que se hizo mal una solicitud, faltan datos o datos sobrantes, faltan headers o cualquier otro error que pueda ocurrir. Es decir se está haciendo una solicitud errónea al servidor
-   5xx, Indican errores del servidor. Suelen aparecer cuando existe un fallo en la ejecución en el servidor.

### Los códigos más comunes a la hora de interactuar con una API son:

-   200: Toda está correcto.
-   201: Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
-   204: Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando, se hacen peticiones con el verbo DELETE.
-   400: Bad Request, algo está mal en la petición. Se nos olvidó enviar un dato o algo relacionado. Por lo general la respuesta nos especifica cuáles fueron los errores a la hora de hacer la petición.
-   401: Unauthorized, esto significa que antes de hacer una solicitud al servidor nos debemos autenticar.
-   403: Forbidden, no tenemos acceso a ese recurso aunque se esté autenticado.
-   404: Not Found, no existe el recurso que se está intentando acceder.
-   500: Interna Server Error, es un error que retorna el servidor cuando la solicitud no pudo ser procesada. Por lo general, si no tenemos acceso al backend, no tenemos control sobre los errores 500 que retorna un API.

### Petición con xhttprequest

instala la dependencia xhttprequest en modo desarrollador para poder ejecutar peticiones en node, verificamos la instalación

`npm install xmlhttprequest --save`

```javascript
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
	let xhttp = new XMLHttpRequest();

	// Se abre una conexión para realizar una petición con el objeto xhttp
	// usando el método open los parametros son:
	// 1. verbo a utilizar
	// 2. es la url de consulta a la api
	// 3. se indica que el comportamiento será asincrono
	xhttp.open('GET', url_api, true);

	// Se está a la escucha de un cambio, si algo sucede, se
	// ejecuta una función. Esta función recibirá por parámetro
	// un evento (este, no siempre se usará) y el objetivo de esta
	// función es ejecutar el callback
	xhttp.onreadystatechange = function (event) {
		// El primer if se valida el estado de xhttp
		// 0: request not initialized
		// 1: server connection established
		// 2: request received
		// 3: processing request
		// 4: request finished and response is ready

		//El segundo if valida el status code  o respuesta
		// del servidor
		// 200: "OK"
		// 403: "Forbidden"
		// 404: "Page not found"
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
```

Referencia

-   [xhttprequest ](https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp)

### Aclaración de varias cosas que quizás no entiendas si estás empezando:

1.  XMLHttpRequest es la forma antigua de hacer llamados, esta clase se usa este método por dos motivos: El primero es que estamos ejecutando todo este pedido utilizando en un entorno node y segundo se está utilizando callback. Actualmente se usa Fetch que es el actual. Fecth se comporta como una promesa y esto se verá más adelante. Para saber por qué el profesor uso OPEN y todas esas funciones aquí está la forma de usar XMLHttpRequest : [https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest).

2.  " new Error ", es una nueva instancia de la clase Error que tiene Javascript, son clases ya implícitas que tiene javascript en este caso es para mostrar bien un mensaje de error podemos usarla, más información aqui: [https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error).

3.  Para los que son front-end y están aprendiendo de Back, el profesor uso GET porque hace parte de los métodos http, en este caso necesitamos pedir información a las url, más información: [https://developer.mozilla.org/es/docs/Web/HTTP/Methods](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)

4.  Por último recomiendo una **escucha atenta** a lo que dice el profesor porque él explica el porqué de cada cosa que hace y si no la conoces recomiendo buscarlas en Internet y así avanzas en el curso.

## 6. Múltiples Peticiones a un API con Callbacks

#### Callback hell

se conoce como los múltiples llamados (mayor de 3) callback que hacen ilegible el código al momento de ver los resultados

Agregando a nuestro script en nuestro packaje.json

```json
	"scripts": {
		"callback:challange": "node src/callback/rick-and-mortis-callback.js",
	},
```

Se debe ejecutar en terminal con

`npm run callback:challange`

Código a ejecutar

```javascript
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
```

## 7. Definición de estructura de promesas

### ¿Qué es una promesa?

Es un objeto que representa la terminación o el fracaso de una operación asíncrona o síncrona.

Al crear una promesa a esta se le debe pasar una función por parámetro y esta función(arrow función o una función anónima) contiene dos parámetros resolve y reject, Esto último hace referencia a si una promesa tuvo éxito en resolver o no. Resolve recibe por parámetro el valor con el cual tuvo éxito y reject recibe por parámetro el valor con el cual fracasó

### Estados de las promesas

-   pending,
    una promesa se inicia en este estado.
-   fulfilled,
    sí la promesa se resuelve es que va a pasar a este estado
-   rejected,
    Sí ocurre algún error en la función asíncrona pasa al estado reject

### Obtener valores de las promesas.then() y.catch()

fulfilled, para obtener el valor se puede llamar a la función.then (val =>...) recibe una función la
cuál está a su vez recibe por parámetro el valor que esperamos por parámetro.

rejected, Sí ocurre algún error en la función asíncrona pasa al estado reject y podemos llamar a la función catch (err=>...) recibe una función la cual está a su vez recibe por parámetro el valor con el cual se obtuvo un error.

### ¿Cómo Crear una promesa?

Agregar el script en nuestro package.json

```json
	"scripts": {
		"promise": "node src/promises/promesas-estructura.js",
	}
```

y luego ejecutar
`npm run promise`

```javascript
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
```

New erro provee un trace del error y nos indica en cuál archivo ocurrió el error.

```javascript
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
```

Se puede ejecutar promesas en paralalelo

```javascript
////////////////////////////////
//Ejemplo, promesas emparalelo
////////////////////////////////
Promise.all([somethingWillHapped1(), somethingWillHapped2()])
	.then((responseSuccess) => console.log(responseSuccess))
	.catch((responseError) => console.error(responseError));
```

## 8. Resolver problema con Promesas

Se establece una carpeta llamada utils la cual contendrá la función que ejecutará las promesas y luego exportamos la función. y luego la importamos en el archivo que implementa la función.

`/src/utils/fetchData/fetchData.js`

```javascript
const fetchData = (url_api) => {
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		let reponse;
		xhttp.open('GET', url_api, true);
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState === 4) {
				if (xhttp.status === 200) {
					response = JSON.parse(xhttp.responseText);
					resolve(response);
				} else {
					reponse = new Error('Error', url_api);
					reject(response);
				}
			}
		};
		xhttp.send();
	});
};

module.exports = fetchData;
```

luego en el archivo importamos

```javascript
// instanciamos XMLHttpRequest
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
```

## 9. Conociendo Async/await

Más que una sintaxis bonita, la utilidad de async/await es permite ampliar el scope de su variable permitiéndole ser accesibles a otra funciones mediante retornos. Este tipo de comportamiento es de los códigos construidos síncronamente.

Por ejemplo, cuando necesitamos que el contenido de una promesa resuelta esté disponible en diferentes scopes usamos async-await. Porque si usamos solo then y catch en dentro de una función estás tendrán un alcance local, ya que la respuesta solo estará disponible dentro del scope de las funciones de la respuesta y una vez se resuelva, esta se “destruye” por decirlo de algún modo.

[Diferencia entre promise con asyn-await](https://www.youtube.com/watch?v=pywyV4pbnQQ)

```javascript
const promesa = function () {
	return new Promise((resolve, reject) => {
		!true
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
```

## 10. Resolver problema con Async/Await

antes de ejecutar `npm run async-await:challange`, agregar los siguientes archivos y linea de código

package.json agregar script en el package.json en la sección de script

```json
"scripts":{
"async-await:challange":  "node src/promises-with-async-await/rick-and-mortis-asyc-await",
}
```

folder file: src/utils/fetchData.js

```javascript
// instanciamos XMLHttpRequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
	return new Promise((resolve, reject) => {
		const xhttp = new XMLHttpRequest();
		let reponse;
		xhttp.open('GET', url_api, true);
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState === 4) {
				if (xhttp.status === 200) {
					response = JSON.parse(xhttp.responseText);
					resolve(response);
				} else {
					reponse = new Error('Error', url_api);
					reject(response);
				}
			}
		};
		xhttp.send();
	});
};

module.exports = fetchData;
```

folder file: src/promises-with-async-await/rick-and-mortis-asyc-await.js

```javascript
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
```

```javascript
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
```

# Capítulo III: comprender las diferencias entre callbacks, promesas y promesas con async-await

## 11. Callbacks Vs Promesas Vs Async/Await

### Callbacks

Ventajas:

-   Simple(una función que recibe otra función).
-   Son universales, corren en cualquier navegador.

Desventajas:

-   Composición tediosa por el anidamiento cuando se necesita recibir elementos en orden y uno tras otro cada vez más elementos. Caer en Callback Hell.

### Promesas

Ventajas:

-   Fácilmente enlazables. Then( return… ).Then
-   Fácil e intuitivo de leer.

Desventajas:

-   No maneja excepciones.
-   Es posible un error si no se retorna el siguiente llamado cuando se requieren varios elementos o cuando uno de estos elementos depende de otro.
-   No corre en todos los navegadores, se requiere un transpilador (polyfill).

### Async-Await

Ventajas:

-   Se puede usar try-catch es decira acepta excepciones.
-   Código más ordenado e intuitivo, es decir más fácil de leer.

Desventajas:

-   No corre en todos los navegadores, se requiere un transpilador (polifyll).
-   Si se requiere hacer un llamado dentro del bloque en el cuál se está ejecutando el await se debe esperar a que este sucede

Referencia:

-   [polyfill](https://developer.mozilla.org/es/docs/Glossary/Polyfill)

# Curso asincronismo de JavaScript - Uso e Instalación

En este repositorio se estudia el asincronismo en JavaScript con la api de rick and morty, usando la api se usa XMLHttpRequest con implementaciones como: callback, promise, async-await.

En cada carpeta se encuentra el siguiente contenido:

1. Se define una estructura general de un callback, promise, async-await, respectivamente.
2. Una vez entendido cuál es la estructura general se realiza el consumo de la api usando XMLHttpRequest implementado en con: callbacks, promise, async-await respectivamente.
3. Las consultas a la api siempre serán las mismas pero implementadas de distintas maneras:

-   Primero se consulta toda la información del universo rick and morty.
-   Luego se toma un personaje y se muestra el nombre.
-   Por último se consulta la dimensión que pertenece ese personaje.

Referencia:

-   [Api rick and morty](https://rickandmortyapi.com/)
-   [Documentación de la api rick and morty](https://rickandmortyapi.com/about)

## instalación de paquetes necesarios para ejecutar el código

Para realizar las peticiones xhttprequest Instala la dependencia xhttprequest en modo desarrollador para poder ejecutar peticiones en node, verificamos la instalación

```sh
npm init
npm install xmlhttprequest --save
```

## Ejecutar código con npm run

Una vez inicializado el proyecto se puede ejecutar el código configurando en el package.json un script.

Para ejecutar los archivos con `npm run alias-file`, en el archivo`package.json` en la sección de `scripts`, se agrega un alias y el valor será `node [dirección del archivo]`, como se muestra en el siguiente ejemplo

```json
"scripts": {
"callback:asincrono": "node src/callback/callback-estructura-asincrono.js",
"callback:sincrono": "node src/callback/callback-estructura-sincrono.js",
"callback:challange": "node src/callback/rick-and-mortis-callback.js",
"promise": "node src/promises/promesas-estructura.js",
"promise:challange": "node src/promises/rick-and-mortis-promise.js",
"async-await": "node src/promises-with-async-await/async-await-estructura.js",
"async-await:challange": "node src/promises-with-async-await/rick-and-mortis-asyc-await",
"test": "echo \"Error: no test specified\" && exit 1"
},
```

para los anteriores scripts se ejecutará con `npm run` de la siguiente manera

```sh
npm run callback:asincrono
npm run callback:sincrono
npm run callback:challange
npm run promise
npm run promise:challange
npm run async-await
npm run async-await:challange
```

# Otras notas

Les comparto un pequeño juego que hice con lo aprendido
URL: [https://juandagarcia.github.io/MemoryGame/](https://juandagarcia.github.io/MemoryGame/)
Repositorio: [https://github.com/JuandaGarcia/MemoryGame](https://github.com/JuandaGarcia/MemoryGame)

Les comparto este proyecto que hice, no es muy elaborado, pero ayuda a practicar los conceptos del curso. Anímense también!

Esta es la pagina web: [https://serene-ardinghelli-c5c558.netlify.app/](https://serene-ardinghelli-c5c558.netlify.app/)
Este es el repositorio en git: [https://github.com/darkOwlWood/AsynchronismRickAndMorty](https://github.com/darkOwlWood/AsynchronismRickAndMorty)
