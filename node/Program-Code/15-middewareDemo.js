
// this is a example of meddaware 


const express = require('express');

const app = express();

// this is define the middeware 

const reqFilter = require('./14-middeware');


// middeware in same file example
// try this code

// const reqFilter = (req, res, next) => {
//     if (!req.query.age) {
//         res.send('enter age')
//     } else if (req.query.age < 18) {
//         res.send('you are not enter to the page')
//     } else {
//         next();
//     }
// }
// app.use(reqFilter);



const route = express.Router


route.use(reqFilter);
app.get('/', (req, res) => {
    res.send('<h1>welcome to the home pages</h1>');
})

app.get('/about', (req, res) => {
    res.send('About pages');
})

route.get('/login', (req, res) => {
    res.send('this is a login pages');
})

route.get('/contact', (req, res) => {
    res.send('this is a contact pages');
})

app.use('/', route);


app.listen(3000);