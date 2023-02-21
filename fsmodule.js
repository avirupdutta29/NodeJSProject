const fs = require('fs');

// fs.readFile('index.js','utf-8',(error,data)=>{
//     console.log(error,data);
// })

// const a = fs.readFileSync('index.js')
fs.writeFileSync('file2.txt', "Hello Avirup. How Are You");
console.log("Finished reading the file");