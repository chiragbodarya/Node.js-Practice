
//this example of insert the data in data base
// you also use insertOne, insertMany, insert

const getData = require('./17-mongodb-connect');

const insert = async () => {
    let data = await getData();
    const result = data.insertMany(
        [
            { name: 's-24 pluse', company: 'samsung', price: 90000 },
            { name: 'node-3', company: '1+', price: 20000 },
        ]
    )
}

insert();