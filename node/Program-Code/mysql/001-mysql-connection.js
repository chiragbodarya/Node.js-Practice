const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});

con.connect((err) => {
    if (err) throw err;

    con.query('select * from student', (error, result) => {
        if (error) throw error;
        console.log(result[10].name);
    })
});

