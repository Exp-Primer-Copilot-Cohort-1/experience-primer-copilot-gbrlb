// Create web server

const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Use res.render to load up an ejs view file
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
