const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, 'public');

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/home.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`)
})


// two way to declared the 404 page

// app.get('/*', (req, res) => {
//     res.sendFile(`${publicPath}/404.html`)
// })

app.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
})

app.listen(3000);