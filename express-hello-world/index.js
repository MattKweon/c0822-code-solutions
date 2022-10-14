const express = require('express');

const app = express();

app.use((req, res) => {
  res.send('I am confusion');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is serving... period');
});
