const express = require('express');
const { Client } = require('pg');

const client = new Client({ user: 'keeganpapakipos', database: 'movies' });
const app = express();
const port = 5000;


app.get('/', (req, res) => {
  res.send('hey, howdy!')
});

app.listen(port, () => {
  console.log(`Keegan Site API listening at http://localhost:${port}`)
});

// (async () => {
//   await client.connect()
//   const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//   console.log(res.rows[0].message) // Hello world!
//   await client.end()
// })();