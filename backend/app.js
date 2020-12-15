require('dotenv').config()
const express = require('express')
// const { Client } = require('pg');

// const client = new Client({ user: 'keeganpapakipos', database: 'movies' });
const app = express()
const port = 4000
const path = require('path')

// (async () => {
//   await client.connect()
//   const res = await client.query('SELECT $1::text as message', ['Hello world!'])
//   console.log(res.rows[0].message) // Hello world!
//   await client.end()
// })();

// console.log(path.join(__dirname, '../frontend/build'))
// app.use('/', express.static(path.join(__dirname, '../frontend/build')))

app.get('/*', (req, res) => {
  console.log(path.join(__dirname, '../frontend/build/'))
  res.sendFile('index.html', { root: path.join(__dirname, '../frontend/build/') })
})

app.listen(port, () => {
  console.log(`Keegan Site API listening at http://localhost:${port}`)
})
