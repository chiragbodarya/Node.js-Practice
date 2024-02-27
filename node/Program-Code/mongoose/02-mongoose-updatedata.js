const mongoose = require("mongoose");

const updateData = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/product");
        const mySchema = new mongoose.Schema({
            name: String,
            price: Number,
        });
        const MyModel = mongoose.model("product", mySchema);
        let data = await MyModel.updateOne(
            { name: 's-9' },
            { $set: { price: 10000 } }
        )
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

updateData();
