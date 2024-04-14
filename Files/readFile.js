const fs = require('node:fs');
fs.readFile('/Users/sanjay.singh/Desktop/JavaScript/practice_js_basic/Files/read.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});