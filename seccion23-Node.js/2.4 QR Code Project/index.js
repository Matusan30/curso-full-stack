/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// Importar los paquetes a usar
import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

// Hacer el input
inquirer
    .prompt([
        // Cada input es como un objeto ?
        {
        type: "input",
        name: "valor",
        message: "Ingrese la URL que quiere convertir a QR: ",
        }
    ])
.then((answers) => {

    // Se rescata el valor de las respuestas
    const url = answers.valor;

    // Se genera el QR como png
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_image.png"));

    // Se agrega el link que puso el usuario en el archivo URL.txt
    fs.writeFileSync("URL.txt", url + "\n", {flag: "a"}, (err) => {
        if (err) throw err;
    });
    console.log("Se generó el código QR y se guardó el historial!");
})
.catch((error) => {
    if (error.isTtyError) {
      console.log("El prompt no pudo ser renderizado en este entorno.");
    } else {
      console.log("Algo salió mal:", error);
    }
});

