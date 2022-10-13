const fs = require('fs');

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const output = JSON.parse(data);
    for (var key in output.notes) {
      console.log(`${key}: ${output.notes[key]}`);
    }
  });
}
if (process.argv[2] === 'add') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const output = JSON.parse(data);
    output.notes[`${output.nextId}`] = process.argv[3];
    output.nextId++;
    fs.writeFile('data.json', JSON.stringify(output, null, 2), err => {
      if (err) throw err;
    });
  });
}
if (process.argv[2] === 'delete') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const output = JSON.parse(data);
    for (const key in output.notes) {
      if (key === process.argv[3]) {
        delete output.notes[key];
      }
    }
    fs.writeFile('data.json', JSON.stringify(output, null, 2), err => {
      if (err) throw err;
    });
  });
}
if (process.argv[2] === 'update') {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const output = JSON.parse(data);
    for (const key in output.notes) {
      if (key === process.argv[3]) {
        output.notes[key] = process.argv[4];
      }
    }
    fs.writeFile('data.json', JSON.stringify(output, null, 2), err => {
      if (err) throw err;
    });
  });
}
