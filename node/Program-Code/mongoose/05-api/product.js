
// all schema ans model is defined in this file

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    available: Boolean
});

module.exports = mongoose.model('products', productSchema);