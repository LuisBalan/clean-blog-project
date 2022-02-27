const { application } = require('express');
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');


const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(URL)
// mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

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


app.listen(4000, () => {
    console.log('App listening in the port 4000')
});