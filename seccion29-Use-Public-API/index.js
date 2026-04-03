// Esta aplicación va a mostrar una frase random de alguna de las películas y va a decir de qué peli es

// Se importan los paquetes que se van a usar
import express from "express";
import axios from "axios";

// Se declaran las variables
const app = express();
const port = 3000;
const API_URL = "https://the-one-api.dev/v2";

app.use(express.static("public"));

// Para poder conseguir el API-Key se debe ingresar al sitio web de la API y registrarse (https://the-one-api.dev/sign-up)
const YOUR_API_KEY = "2WoBt1rzFJoij4Aw6bUc";

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", async (req, res) => {
    try {
        // Obtener la frase de la API
        const quoteResponse = await axios.get(API_URL + "/quotes/random/", {
            headers: { "Authorization": `Bearer ${YOUR_API_KEY}` }
        });
        const quoteResult = quoteResponse.data;
        console.log(quoteResult);

        // Obtener el nombre del personaje basado en el 
        //  id de la consulta anterior
        const characterResponse = await axios.get(API_URL + `/character/${quoteResult.character}`, {
            headers: { "Authorization": `Bearer ${YOUR_API_KEY}` }
        });
        const characterData = characterResponse.data;
        const characterName = characterData.docs[0].name;
        console.log (characterName);

        res.render("index.ejs", { 
            phrase: quoteResult.dialog,
            character: characterName
        });
    } catch (error) {
        console.error(error);
    }
});

// Se abre el puerto (3000) para la página
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});