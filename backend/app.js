const express = require('express');
// const { Client } = require('pg');

// const client = new Client({ user: 'keeganpapakipos', database: 'movies' });
const app = express();
const port = 5000;
const path = require('path');

// (async () => {
//   await client.connect()
//   const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//   console.log(res.rows[0].message) // Hello world!
//   await client.end()
// })();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile('frontend/build/index.html', {root: path.join(__dirname, "../")});
});

app.listen(port, () => {
  console.log(`Keegan Site API listening at http://localhost:${port}`)
});
