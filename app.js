const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

app = express();

let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'))

app.get('/', (req, res)=> {
    res.render('index.ejs');
});

app.get('/signin', (req, res)=> {
    res.render('signin.ejs');
});

app.get('/register', (req, res)=> {
    res.render('register.ejs');
});

app.listen(3000)