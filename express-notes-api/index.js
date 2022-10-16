const express = require('express');

const app = express();

const data = require('./data');

app.get('/api/notes', (req, res) => {
  const output = [];
  for (const key in data.notes) {
    output.push(data.notes[key]);
  }
  res.json(output);
});

app.get('/api/notes/:id', (req, res) => {
  const errorMsg = {};
  if (Math.sign(req.params.id) !== 1) {
    errorMsg.error = 'id must be a positive integer';
    res.status(400).json(errorMsg);
  }
  // for (const key in data.notes) {
  // if () {
  //   const errorMsg = {
  //     error: `cannot find note with id ${}`;
  //   }
  //   res.status(401).json(errorMsg);
  // }
  // }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 is serving!');
});
