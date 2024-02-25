
// connect database and show data 

//this code is a coonect to the data base
const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/product';
const database = 'product';
const client = new MongoClient(url);


async function getData() {
    try {
        let result = await client.connect();
        let db = result.db(database);
        return db.collection('phone');
    } catch (error) {
        console.log("Err: data base not connected", error);
    }
}

module.exports = getData;