import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  database: 'world',
  port: 5433,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

db.connect();

app.get('/', async (req, res) => {
  try {
    // Obtener la lista de códigos
    const result = await db.query('SELECT country_code FROM visited_countries');

    // Desestructurar los códigos
    const countries = result.rows.map((country) => country.country_code);

    // Contar el total de países recorridos
    const total = countries.length;

    res.render('index.ejs', { countries, total });
  } catch (err) {
    console.error(err);
  }
});

app.post('/add', async (req, res) => {
  try {
    const selectedCountry = req.body.country;

    // Obtener la lista de códigos
    const result = await db.query('SELECT country_name, country_code FROM countries');

    // Desestructurar los códigos
    const countryData = result.rows.find((country) => country.country_name === selectedCountry);

    if (countryData === undefined) {
      throw new Error('No se encontró el país');
    }

    const insert = await db.query(
      `
      INSERT INTO visited_countries
      (country_code) VALUES ($1) RETURNING *`,
      [countryData.country_code]
    );

    console.log(insert.rows[0]);

    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
