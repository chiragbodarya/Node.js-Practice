
// this is a besic forment of mongoose 
// this code is use to connect the data base use mongoose

const mongoose = require("mongoose");
try {
    await mongoose.connect("mongodb://127.0.0.1:27017/product");
} catch (error) {
    console.log('data base is not conneted', error);
}