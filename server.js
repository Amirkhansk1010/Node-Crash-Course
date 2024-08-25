const http = require('http');

//<-----------------Creaing Server--------------------->
const server = http.createServer((req,res)=>{
    console.log('request made');
})



//<----------------Server listening to port 3000---------------->
server.listen(3000,'localhost',()=>{
    console.log('listening for request on port 3000');
})