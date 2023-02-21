const { response } = require("express");
const http = require("http");
const fs = require('fs');
const port = process.env.PORT || 3000;

const server = http.createServer((req, response)=>{
    
    response.setHeader('Content-Type', 'text/html');
    console.log(req.url);
    if(req.url ==="/"){
        response.statusCode=200;
        response.end('<h1>I am learning NodeJS</h1><br><p>I am preparing for future Software Interviews</p>');
    }
    else if(req.url ==='/about'){
        response.statusCode=200;
        response.end('<h1>I am learning Spring Boot</h1><br><p>I am preparing for future Software Interviews</p>');
    }
    else if(req.url ==='/hello'){
        response.statusCode=200;
        const data = fs.readFileSync('index.html')
        response.end(data.toString());
    }
    else{
        response.avirup();
        response.statusCode=404;
        response.end('<h1>Page Not Found</h1><br><p>The Page was not found on the Server</p>');
    }
   
});

server.listen(port, () =>{
   console.log('Server is listnening on port no', port);
});