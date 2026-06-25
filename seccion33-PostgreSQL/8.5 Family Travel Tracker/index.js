import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'world',
  password: '1234',
  port: 5433,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let currentUserId = 1;

let users = [
  { id: 1, name: 'Angela', color: 'teal' },
  { id: 2, name: 'Jack', color: 'powderblue' },
];

async function findUserData(userId) {
  try {
    // if (userId < 0 || !Number(userId)) {
    //   throw new Error('Formato de datos incorrectos');
    // }
    console.log(userId);
    const result = await db.query(`SELECT * FROM users WHERE id = $1`, [userId]);
    console.log(result.rows[0]);
    return result.rows[0];
  } catch (err) {
    console.error(err);
  }
}

async function checkVisistedByUser(userId) {
  const result = await db.query(
    `
    SELECT country_code
    FROM visited_countries vc
    JOIN users u ON vc.user_id = u.id
    WHERE user_id = $1`,
    [userId]
  );
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

async function getAllUsers() {
  const result = await db.query('SELECT * FROM users');

  return result.rows;
}

app.get('/', async (req, res) => {
  const countries = await checkVisistedByUser(currentUserId);
  const userData = await findUserData(currentUserId);
  const allUsers = await getAllUsers();

  res.render('index.ejs', {
    countries: countries,
    total: countries.length,
    users: allUsers ?? users,
    color: userData.color,
  });
});

app.post('/add', async (req, res) => {
  const input = req.body['country'];
  // const currentUser = await findUserData(currentUserId);

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query('INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)', [
        countryCode,
        currentUserId,
      ]);
      res.redirect('/');
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});

app.post('/user', async (req, res) => {
  if (req.body.add === 'new') {
    res.render('new.ejs');
  } else {
    currentUserId = req.body.user;
    res.redirect('/');
  }
});

app.post('/new', async (req, res) => {
  try {
    const name = req.body.name;
    const color = req.body.color;

    if (!name || !color) {
      throw new Error('No hay nombre o color');
    }

    const result = await db.query(
      `
      INSERT INTO users
      (name, color)
      VALUES ($1, $2)
      RETURNING *`,
      [name, color]
    );

    currentUserId = result.rows[0].id;
    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
