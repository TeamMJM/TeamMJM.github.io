const express = require('express');
const app = express();
const path = require('path');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', express.static(__dirname + './../'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/build/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/bundle.js'))
})

app.get('/images/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/logo.png'))
})

app.get('/images/1.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/1.png'))
})
app.get('/images/2.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/2.png'))
})
app.get('/images/3.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/3.png'))
})
app.get('/images/linkedin.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/linkedin.png'))
})
app.get('/images/jerry.JPG', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/jerry.JPG'))
})
app.get('/images/miranda.JPG', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/miranda.JPG'))
})
app.get('/images/mustafa.JPG', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/mustafa.JPG'))
})

app.get('/images/screen.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/images/screen.png'))
})


app.listen(3000, () => {
    console.log('App listening on port 3000')
})