const express = require('express');

const app = express();

let nextId = 1;
const grades = [];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  res.status(201);
  req.body.id = nextId;
  grades.push(req.body);
  res.json(req.body);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
