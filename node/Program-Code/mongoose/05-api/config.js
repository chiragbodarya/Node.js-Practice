
//the data base connect in this file

const mongoose = require("mongoose");
try {
    mongoose.connect("mongodb://127.0.0.1:27017/product");
} catch (error) {
    console.log('data base is not conneted', error);
}