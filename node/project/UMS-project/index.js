
//this code is connection of data base

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ums-project');
const express = require('express');
const app = express();

//for user_routes
const userRoute = require('./routes/userRoute')
app.use('/', userRoute)

app.listen(3000, (error) => {
    if (error) throw console.log('not connected to server : ', error);
    console.log('server is runing in port : 3000');
});