import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const fecha = new Date();
const diaSemana = fecha.getDay();
var finde = false;

esFinde(diaSemana);

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", { finde: finde });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

function esFinde(dia) {
    if (dia === 0 || dia === 6) {
        finde = true;
    }
}