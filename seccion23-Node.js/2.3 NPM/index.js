
// Importar la librería en formato CJS
// var generateName = require("sillyname");

// Importar la librería en formato ESM
import generateName from "sillyname";

// Generar un nombre random y mostarlo
// var name = generateName();

// Para instalar el paquete: npm install superheroes
import {randomSuperhero} from "superheroes";
const name = randomSuperhero();


// Mostrar el nombre
console.log("My name is " + name);