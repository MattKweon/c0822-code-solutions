const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  const copyOfFile = data;
  fs.writeFile(process.argv[3], copyOfFile, err => {
    if (err) throw err;
  });
});
