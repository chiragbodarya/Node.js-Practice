
// dynamic routing use ejs 

const express = require('express');
const path = require('path');

const app = express();


//this line is declared the ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const user = {
        name: 'ram',
        wife: 'sita',
        age: '10000year',
        email: 'ramdasrat1@gmail.com',
        brother: ['bharat', 'lakshman', 'shatrughna']
    }
    res.render('home', { user });
    // res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.listen(3000);