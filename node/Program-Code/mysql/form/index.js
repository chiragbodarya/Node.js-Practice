const express = require('express')
const app = express();
const con = require('./connection');
const ejs = require('ejs')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs');


con.connect((error) => {
    if (error) console.error('Error connecting to MySQL:', error);
    console.log('Connected to MySQL database');
});

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/ragister.html');
});

app.post('/form', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let form_number = req.body.form_number;

    let sql = `INSERT INTO form (name, email, form_number) VALUES ('${name}', '${email}', '${form_number}')`;
    // var sql = "INSERT INTO form (name, email, form_number) VALUES ?";
    // var values = [
    //     [name, email, form_number]
    // ]
    con.query(sql, (error, result) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).send('An error occurred while processing your request');
            return;
        }
        console.log('Inserted row ID:', result.insertId);
        res.send('Student registered successfully');
    });
});


app.get('/student', (req, res) => {
    let sql = 'SELECT * FROM `form`';

    con.query(sql, (error, result) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            res.status(500).send('An error occurred while processing your request');
            return;
        }

        console.log(result)
    })
})





app.listen(5000);