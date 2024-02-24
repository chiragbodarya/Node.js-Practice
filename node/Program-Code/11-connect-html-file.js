

//this example is use to connect the html page in use express


const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')

// console.log(publicPath)
app.use(express.static(publicPath))


app.listen(3000);




// localhost:3000/home.html     show result