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

app.get('/logo.png', (req, res) => {
    res.sendFile(path.join(__dirname, '/logo.png'))
})

app.listen(3000, () => {
    console.log('App listening on port 3000')
})