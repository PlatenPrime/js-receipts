const fs = require("fs") ;
const path = require("path") ;




console.log(__dirname);
console.log(__filename);

const newDirectoryPath = path.join(__dirname, "/cache");

fs.mkdirSync(newDirectoryPath);
