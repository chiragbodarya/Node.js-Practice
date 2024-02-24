
//this is a express js example and information
//check all code one by one


const express = require('express');
const app = express();



// this page is show on localhost:3000/

app.get('', (req, res) => {
    res.send('this is a home page');
});






// this page is show on localhost:3000/about

app.get('/about', (req, res) => {
    res.send('this is about page');
});






// this page is show on localhost:3000/aksn       use write anythink this is a 404 page

// app.get('/*', (req, res) => {
//     res.send('this is a 404 page');
// });






//this example is use rout perams  localhost:3000/?name=ram      you can write anythink name (ram)

app.get('', (req, res) => {
    // console.log('the data is set by browser => ', req.query.name)
    res.send('welcome,' + req.query.name)
})







//this example is render the HTML tag sport    
// and also use a qurey parems so check it also

app.get('/html', (req, res) => {
    res.send(`
    <h1>this a title is render use by express</h1> 
    <br>
    <input type='text' placeholder='Enter a Text' value=${req.query.name}>
    <button type='submit'>submit</button>
    `);
})






//this example is render the JSON tag sport

app.get('/json', (req, res) => {
    res.send([
        { name: 'ram', wife: 'sita', age: '10000year', email: 'ramdasrat1@gmail.com' },
        { name: 'bharat', wife: 'mandavi', age: '10000year', email: 'bharatdasrat1@gmail.com' },
    ]
    );
})


app.listen(3000);