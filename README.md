# Curso asincronismo de JavaScript

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
