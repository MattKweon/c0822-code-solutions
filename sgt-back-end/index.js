const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Port 3000 is serving');
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name || !req.body.course || !req.body.score ||
    Number(req.body.score < 0) || Number(req.body.score > 100)) {
    res.status(400).json({
      error: 'name, course, and valid score(0-100) must be provided.'
    });
    return;
  }

  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;

  const sql = `
    insert into "grades" ("name", "course", "score")
    values ('${name}', '${course}', '${score}')
    returning *
  `;

  db.query(sql)
    .then(result => {
      const createdGrade = result.rows[0];
      res.status(201).json(createdGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});
