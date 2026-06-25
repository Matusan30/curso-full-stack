import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  database: 'permalist',
  host: 'localhost',
  user: 'postgres',
  password: '1234',
  port: 5433,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let items = [
  { id: 1, title: 'Buy milk' },
  { id: 2, title: 'Finish homework' },
];

app.get('/', async (req, res) => {
  try {
    const result = await db.query(`SELECT * FROM items WHERE active = true`);
    const items = result.rows;
    res.render('index.ejs', {
      listTitle: 'Today',
      listItems: items,
    });
  } catch (err) {
    console.error(err);
  }
});

app.post('/add', async (req, res) => {
  try {
    const itemTitle = req.body.newItem;
    await db.query(`INSERT INTO items (title) VALUES ($1)`, [itemTitle]);

    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
});

app.post('/edit', async (req, res) => {
  try {
    const itemId = req.body.updatedItemId;
    const itemTitle = req.body.updatedItemTitle;
    await db.query(`UPDATE items SET title = $1 WHERE id = $2`, [itemTitle, itemId]);

    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
});

app.post('/delete', async (req, res) => {
  try {
    const itemId = req.body.deleteItemId;
    await db.query(`UPDATE items SET active = false WHERE id = $1`, [itemId]);

    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
