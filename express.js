const express = require('express');

const app = express();

app.listen(8000);


// <-----------------Listen for request------------------>

app.get('/',(req,res)=>{
    // res.send('<h1>Amir</h1');            // responding to only single html tag element
    
    res.sendFile('./Html/html1.html',{root: __dirname});        // sendFile() method will send full html file as a respose
})

app.get('/transformation',(req,res)=>{
    res.sendFile('./Html/transformation.html',{root: __dirname});
})

app.get('/transition',(req,res)=>{
    res.sendFile('./Html/transition_css.html',{root: __dirname});
})

app.get('/index',(req,res)=>{
    res.sendFile('./Html/index.html',{root: __dirname});
})

// <--------------redirecting------------------>
app.get('/about-me',(req,res)=>{
    res.redirect('/index');
})


// <----------------404------------------------>

app.use((req,res)=>{
    res.status(404).sendFile('./Html/404.html',{root: __dirname});
})
