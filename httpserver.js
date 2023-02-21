const { response } = require("express");
const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, response)=>{
    console.log(req.url);
    response.statusCode=200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>I am learning NodeJS</h1><br><p>I am preparing for future Software Interviews</p>');
});

server.listen(port, () =>{
   console.log('Server is listnening on port no', port);
});