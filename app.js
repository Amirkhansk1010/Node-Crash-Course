const express = require('express');
const morgan = require('morgan');            // 3rd party middleware
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');



// express app
const app = express();

// connect to database
const dbURI = 'mongodb+srv://amirblog:text1234@cluster0.ehg6gui.mongodb.net/node-tuts';
mongoose.connect(dbURI)
    .then((result) => {
        app.listen(8000);
    })
    .catch((err)=>{
        console.log(err);
    })

// register view engine
app.set('view engine','ejs');      // the view engine automatically looks for views directory for ejs file
// app.set('views','myfolder');    // to explicitly tell view engine for ejs file directory



app.use(express.static('public'));                          // static middleware
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});


/*
// mongoose and mongo sandbox route
app.get('/add-blog',(req,res)=>{
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.get('/single-blog',(req,res)=>{
    Blog.findById('65b69f9b5b3fb73ff7f4bb14')
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
});
*/

// routes
app.get('/',(req,res)=>{
    res.redirect('/blogs');
})


app.get('/about',(req,res)=>{
    res.render('about', {title: 'About'});
})

// blog routes
app.use('/blogs', blogRoutes);

app.use((req,res)=>{
    res.status(404).render('404', {title: '404'});
})