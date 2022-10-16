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

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 is serving!');
});
