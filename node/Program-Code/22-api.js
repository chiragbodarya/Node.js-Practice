const express = require('express')
const getData = require('./17-mongodb-connect')

const mongodb = require('mongodb')

const app = express();
app.use(express.json());



//get method    ---   it is use to read the data
app.get('/home', async (req, res) => {
    try {
        let data = await getData();
        let result = await data.find().toArray();
        res.send(result)
    } catch (error) {
        res.send('data not show', error)
    }
});






//post method     ----      it is use to inset the data
app.post('/home2', async (req, res) => {
    let data = await getData();
    let result = await data.insertOne(req.body)
    res.send(result)
})







// put method      ----      it is use to upadate the data
app.put('/home3', async (req, res) => {
    let data = await getData()
    let result = data.updateOne(
        {
            name: "s-22"
        },
        {
            $set: { price: 4000 }
        })
    res.send({ result: 'update' })
})

//update the data use params 
app.put('/:name', async (req, res) => {
    let data = await getData();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    res.send({ status: 'update' })
})





//delete method      ----      it is use to delete the data
app.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    let data = await getData();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })

    res.send(result)
})


app.listen(3000);