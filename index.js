
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost.js');


const URL = `mongodb+srv://balanAdminDB:JNbd63fYqbmih7K4@didactic-cluster.xfkki.mongodb.net/clean-blog-project?retryWrites=true&w=majority`
mongoose.connect(URL)


app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/post', (request, response) => {
    response.render('post')
});

app.get('/contact', (request, response) => {
    response.render('contact')
});

app.get('/posts/new', (req, res) => {
    res.render('create');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.post('/posts/store', (req, res) => {
//     //model creates a new doc with browser data
//     BlogPost.create(req.body, (error, blospost) => {
//     res.redirect('/')
//     });
//     console.log(req.body)
// });

app.post('/posts/store', async (req, res) => {
    await BlogPost.create(req.body);
    console.log(req.body);
    res.redirect('/');
});

app.listen(4000, () => {
    console.log('App listening in the port 4000')
});
