const getData = require("./17-mongodb-connect")

// this is a first method to show data and also read the data in you database

// getData().then((res) => {
//     res.find().toArray().then((data) => {
//         console.log(data)
//     })
// })

// console.log(getData())


// this is a secound method to show data and also read the data in you database

const main = async () => {
    let data = await getData();
    data = await data.find().toArray();
    console.log(data);
}
main();