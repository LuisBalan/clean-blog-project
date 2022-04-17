const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost.js');
const fileUpload = require('express-fileupload');


const URL = `mongodb+srv://balanAdminDB:JNbd63fYqbmih7K4@didactic-cluster.xfkki.mongodb.net/clean-blog-project?retryWrites=true&w=majority`
mongoose.connect(URL)


app.set('view engine', 'ejs');

app.use(express.static('public'));



app.get('/about', (request, response) => {
    response.render('about');
});

app.get('/post/:id', async (request, response) => {
    console.log(request.params)
    const blogpost = await BlogPost.findById(request.params.id)
    response.render('post', {
        blogpost
    })
});

app.get('/contact', (request, response) => {
    response.render('contact')
});

app.get('/posts/new', (request, response) => {
    response.render('create');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload);

app.post('/posts/store', (request, response) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/img', image.name),
    async (error) => {
        await BlogPost.create(req.body)
        response.redirect("/")

    })



    // await BlogPost.create(request.body);
    // console.log(request.body);
    // response.redirect('/');
});

app.listen(4000, () => {
    console.log('App listening in the port 4000')
});


//========== display posts in home ==========

app.get('/', async (request, response) => {
    const blogposts = await BlogPost.find({});
    response.render('index',{
        blogposts
    });
    console.log(blogposts)
});

