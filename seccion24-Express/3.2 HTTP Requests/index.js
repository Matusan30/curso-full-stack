import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/contact", (req, res) => {
  res.send("Contact");
});

app.listen(port, () => {
  console.log(`Server Running on port ${port}.`)
})