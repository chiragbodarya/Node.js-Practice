
//this example of delete data in database
//you also use deleteOne, deleteMany

const getData = require('./17-mongodb-connect');

const deleteData = async () => {
    let data = await getData();
    let result = data.deleteOne(
        { name: '14-pfthro' }
    )
}

deleteData();