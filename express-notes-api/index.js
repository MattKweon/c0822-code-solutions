const express = require('express');

const app = express();

const data = require('./data');

const notes = data.notes;

const fs = require('fs');

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
  } else if (!notes[req.params.id]) {
    errorMsg.error = `cannot find note with id ${req.params.id}`;
    res.status(404).json(errorMsg);
  }
  for (const key in notes) {
    if (key === req.params.id) {
      res.json(notes[key]);
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 is serving!');
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const errorMsg = {};
  if (!req.body) {
    errorMsg.error = 'content is a required field';
    res.status(400).json(errorMsg);
  } else {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        errorMsg.error = 'An unexpected error occured.';
        res.status(500).json(errorMsg);
      } else {
        req.body.id = data.nextId;
        res.status(201).json(req.body);
        const newFile = JSON.parse(data);
        newFile.notes[`${newFile.nextId}`] = req.body;
        newFile.nextId++;
        fs.writeFile('data.json', JSON.stringify(newFile, null, 2), err => {
          if (err) throw err;
        });
      }
    });
    notes[data.nextId] = req.body;
    data.nextId++;
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const errorMsg = {};
  if (Math.sign(req.params.id) !== 1) {
    errorMsg.error = 'id must be a positive integer';
    res.status(400).json(errorMsg);
  } else if (!notes[req.params.id]) {
    errorMsg.error = `cannot find note with id ${req.params.id}`;
    res.status(404).json(errorMsg);
  }
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      errorMsg.error = 'An unexpected error occured.';
      res.status(500).json(errorMsg);
    }
    const newFile = JSON.parse(data);
    for (const key in newFile.notes) {
      if (key === req.params.id) {
        delete newFile.notes[key];
      }
    }
    fs.writeFile('data.json', JSON.stringify(newFile, null, 2), err => {
      if (err) throw err;
    });
    res.status(204);
  });
});
