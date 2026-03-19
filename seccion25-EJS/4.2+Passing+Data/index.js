import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", 
    { title: "Ingrese su nombre" }
  );
});

app.post("/submit", (req, res) => {
  const firstName = req.body["fName"];
  const lastName = req.body["lName"];
  const cantLetras = firstName.length + lastName.length;

  res.render("index.ejs", 
    { title: `Su nombre tiene ${cantLetras} letras` }
  );
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
