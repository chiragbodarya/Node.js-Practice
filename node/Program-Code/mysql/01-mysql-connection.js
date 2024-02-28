
//this is a connection of mysql 

const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

con.connect((err) => {
    if (err) {
        console.warn('error')
    } else {
        console.log('connected')
    }
})



//this code is use to show data in user table

con.query('SELECT * FROM `user`', (err, result) => {
    console.warn('result', result)
})