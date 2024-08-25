const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

    // res.setHeader('Content-Type','text/plain');                    // set Header content type -> can be text,plain,html.
    res.setHeader('Content-Type','text/html');
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<h1>Hello</h1>');

    // to send html file as a response by using file('fs') module
    fs.readFile('Html/html1.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else{
            // res.write(data);
            res.end(data);                         // if data is single file then we can pass it directly into end() method
        }
    })
    
})



server.listen(8000,'localhost',()=>{
    console.log('sever listening for request on port number 3000');
})