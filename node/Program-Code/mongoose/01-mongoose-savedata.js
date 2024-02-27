
// this code is use to save tha data in database

const mongoose = require("mongoose");

const saveData = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/product");
        const mySchema = new mongoose.Schema({
            name: String,
            price: Number,
        });
        const MyModel = mongoose.model("product", mySchema);
        let data = new MyModel({ name: "s-9", price: 15000 });
        let result = await data.save();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

saveData();