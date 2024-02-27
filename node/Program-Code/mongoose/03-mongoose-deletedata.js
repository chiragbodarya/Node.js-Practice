const mongoose = require("mongoose");

const deleteData = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/product");
        const mySchema = new mongoose.Schema({
            name: String,
            price: Number,
        });
        const MyModel = mongoose.model("product", mySchema);
        let data = await MyModel.deleteOne(
            { price: 10000 }
        )
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

deleteData();
