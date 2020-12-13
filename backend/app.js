const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile('frontend/build/index.html', {root: path.join(__dirname, "../")});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});