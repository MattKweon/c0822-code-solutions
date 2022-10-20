const fs = require('fs');

function cat(file) {
  if (file.length > 2) {
    fs.readFile(file[2], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      file.splice(2, 1);
      cat(file);
    });
  }
}

cat(process.argv);
