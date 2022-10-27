const express = require('express');
const path = require('path');

const app = express();

const combinePath = path.join(__dirname, 'public');

const expressStatic = express.static(combinePath);

app.use(expressStatic);

app.listen(3000, () => {
  console.log('Port 3000 is serving');
});
