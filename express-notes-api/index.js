const express = require('express');

const app = express();

const data = require('./data');

const notes = data.notes;

app.get('/api/notes', (req, res) => {
  const output = [];
  for (const key in notes) {
    output.push(notes[key]);
  }
  res.json(output);
});

app.get('/api/notes/:id', (req, res) => {
  const errorMsg = {};
  if (Math.sign(req.params.id) !== 1) {
    errorMsg.error = 'id must be a positive integer';
    res.status(400).json(errorMsg);
  }
  for (const key in notes) {
    if (key === req.params.id) {
      res.json(notes[key]);
    }
  }
  // if (!notes[req.params.id]) {
  //   errorMsg.error = `cannot find note with id ${req.params.id}`;
  //   res.status(404).json(errorMsg);
  // }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 is serving!');
});
