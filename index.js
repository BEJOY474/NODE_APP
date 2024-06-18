// routing + hosting

const http = require('http');
const fs = require('fs');

//const port = 8080; without hosting
const PORT = process.env.PORT;
const hostname ='127.0.0.1';

const server = http.createServer((req,res)=>{

    const handeling = (statusCode, fileName)=>{
        fs.readFile(fileName,"utf-8", (err, data)=>{
            res.writeHead(statusCode, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        } )
    }

   if(req.url === "/"){
        handeling(200, "./views/index.html");
   }

   else if(req.url === "/about"){
    handeling(200, "./views/about.html");
   }
   else if(req.url === "/contact"){
    handeling(200, "./views/contact.html");
   }
   else {
    handeling(200, "./views/error.html");
    }
   
   

   
});

server.listen(PORT, hostname, ()=>{
    console.log(`Your server is running hostname= http://${hostname}:${PORT}`);
});