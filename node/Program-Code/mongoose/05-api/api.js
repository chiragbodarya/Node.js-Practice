const express = require('express')
require('./config')
const Product = require('./product')

const app = express();
app.use(express.json());





//post method       ----        this is use to add data
app.post('/create', async (req, res) => {
    let data = Product(req.body);
    let result = await data.save();
    res.send(result);
})






//this is a get method     -----     this is use to get data
app.get('/get', async (req, res) => {
    let data = await Product.find();
    res.send(data)
})






//this methos is called a delete method    ---    it is use to delete data in darabase
app.delete('/delete/:_id', async (req, res) => {
    // console.log(req.params)
    let data = await Product.deleteOne(req.params);
    res.send('done');
})





// this method is use to upadate data
app.put('/update/:_id', async (req, res) => {
    let data = await Product.updateOne(
        req.params,
        { $set: req.body }
    )
    res.send(data)
})


app.listen(3000);