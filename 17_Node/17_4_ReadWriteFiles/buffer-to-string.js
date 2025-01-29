const fs = require('fs');

fs.readFile('main.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
  const str = data.toString();
  console.log(str);
});