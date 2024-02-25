
//this is example of update data in database
//also use updateOne, updateMany, update

const getData = require('./17-mongodb-connect')

const update = async () => {
    let data = await getData();
    let result = data.updateOne(
        { name: "14" }, {
        $set: { "company-name": 'apple' }
    }
    )
}

update();