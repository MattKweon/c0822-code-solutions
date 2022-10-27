const express = require('express');
const path = require('node:path');

const app = express();

const combinePath = path.join('public');

const expressStatic = express.static(combinePath);

app.use(expressStatic);

app.listen(3000, () => {
  console.log('Port 3000 is serving');
});
