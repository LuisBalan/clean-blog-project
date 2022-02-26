const { application } = require('express');
const express = require('express');
const res = require('express/lib/response');
const path = require('path');
const app = new express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/about.html'))
});

app.get('/post', (request, response) => {
    response.sendFile(path.resolve(__dirname, './pages/post.html'))
});

app.get('/contact', (request, response) => {
    response.sendFile(path.resolve('./pages/contact.html'))
});


app.listen(4000, () => {
    console.log('App listening in the port 4000')
});