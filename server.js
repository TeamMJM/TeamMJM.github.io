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

app.get('/lib/bootstrap/css/bootstrap.min.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/bootstrap/css/bootstrap.min.css'))
});

app.get('/lib/font-awesome/css/font-awesome.min.css/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/font-awesome/css/font-awesome.min.css'))
});

app.get('/lib/animate/animate.min.css/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/animate/animate.min.css'))
});

app.get('/css/style.css/', (req, res) => {
    res.sendFile(path.join(__dirname, '/css/style.css'))
});

app.get('/lib/jquery/jquery.min.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/jquery/jquery.min.js'))
});

app.get('/lib/jquery/jquery-migrate.min.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/jquery/jquery-migrate.min.js'))
});

app.get('/lib/bootstrap/js/bootstrap.bundle.min.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/bootstrap/js/bootstrap.bundle.min.js'))
});

app.get('/lib/easing/easing.min.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/easing/easing.min.js'))
});

app.get('/lib/wow/wow.min.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/wow/wow.min.js'))
});

app.get('/contactform/contactform.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/contactform/contactform.js'))
});

app.get('/lib/waypoints/waypoints.min.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/waypoints/waypoints.min.js'))
});

app.get('/lib/counterup/counterup.min.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/counterup/counterup.min.js'))
});

app.get('/img/logo.png/', (req, res) => {
    res.sendFile(path.join(__dirname, '/img/logo.png'))
});

app.get('/lib/superfish/hoverIntent.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/superfish/hoverIntent.js'))
});

app.get('/lib/superfish/superfish.min.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/lib/superfish/superfish.min.js'))
});

app.get('/js/main.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/js/main.js'))
});

app.get('/img/jerry.jpg/', (req, res) => {
    res.sendFile(path.join(__dirname, '/img/jerry.jpg'))
});

app.get('/img/miranda.jpg/', (req, res) => {
    res.sendFile(path.join(__dirname, '/img/miranda.jpg'))
});

app.get('/img/mustafa.jpg/', (req, res) => {
    res.sendFile(path.join(__dirname, '/img/mustafa.jpg'))
});

app.get('/contactform/contactform.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/contactform/contactform.js'))
});

app.get('/js/main.js/', (req, res) => {
    res.sendFile(path.join(__dirname, '/js/main.js'))
});

app.get('/css/img/hero-bg.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/css/img/hero-bg.jpg'))
});

app.get('/css/img/call-to-action-bg.jpg', (req, res) => {
    res.sendFile(path.join(__dirname, '/css/img/call-to-action-bg.jpg'))
});


// app.get('/js/main.js/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/js/main.js/'))
// });

// app.get('/js/main.js/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/js/main.js/'))
// });

// app.get('/js/main.js/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/js/main.js'))
// });

// app.get('/js/main.js/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/js/main.js'))
// });

// app.get('/js/main.js/', (req, res) => {
//     res.sendFile(path.join(__dirname, '/js/main.js'))
// });

app.listen(3000, () => {
    console.log('App listening on port 3000')
})