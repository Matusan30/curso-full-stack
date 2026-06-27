import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  database: 'secrets',
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5433,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.get('/register', (req, res) => {
  res.render('register.ejs');
});

app.post('/register', async (req, res) => {
  try {
    const email = req.body.username;
    const password = req.body.password;

    const result = await db.query(
      `INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`,
      [email, password]
    );

    if (result.rows.length < 1) {
      throw new Error('No se pudo crear el usuario');
    }

    res.render('secrets.ejs');
  } catch (err) {
    console.error(err);
  }
});

app.post('/login', async (req, res) => {
  try {
    const email = req.body.username;
    const password = req.body.password;

    const result = await db.query(`SELECT email, password FROM users WHERE email = $1`, [email]);

    if (result.rows.length < 1) {
      throw new Error('No existe el usuario');
    }

    if (password === result.rows[0].password) {
      res.render('secrets.ejs');
    } else {
      res.send('Incorrect Password');
    }
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
