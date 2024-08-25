const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    
    res.setHeader('Content-Type','text/html');

    let path = './Html/';

    switch(req.url){
        case '/':
            path += 'html1.html';
            res.statusCode = 200;
            break;
        case '/transformation':
            path += 'transformation.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/transformation');                 // redirecting
            res.end();
            break;
        case '/transition_css':
            path += 'transition_css.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
})


server.listen(3000,'localhost',()=>{
    console.log('server is listening for user request on port number 3000');
})