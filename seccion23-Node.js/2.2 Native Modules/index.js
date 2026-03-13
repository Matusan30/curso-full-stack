// Importar la librería
const fs = require("fs");

// Para crear el archivo
// fs.writeFile("message.txt", "Hello from Node.js", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// });

// Leer el archivo desde curso-full-stack y mostrarlo en la terminal
fs.readFile('./seccion23-Node.js/2.2 Native Modules/message.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});