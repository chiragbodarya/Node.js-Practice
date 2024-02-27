
// this is a use to find the data in data base


const mongoose = require("mongoose");

const findData = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/product");
        const mySchema = new mongoose.Schema({
            name: String,
            price: Number,
        });
        const MyModel = mongoose.model("product", mySchema);
        let all = await MyModel.find()
        console.log('all data', all);
        let data = await MyModel.findOne(
            { price: 15000 }
        )
        console.log('price 15000 data', data);
    } catch (error) {
        console.log(error);
    }
};

findData();