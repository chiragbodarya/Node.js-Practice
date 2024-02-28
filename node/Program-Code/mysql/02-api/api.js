const express = require('express');
const con = require('./config');

const app = express();



app.use(express.json)


// this is a get api code

app.get('/getdata', (req, res) => {
    con.query('SELECT * FROM `user`', (err, result) => {
        if (err) {
            res.send('errorr')
        } else {
            res.send(result)
        }
    })
})




// this is a post api code

// app.post('/postdata', (req, res) => {
//     const data = { id: 4, name: 'raj', email: 'raj@gmail.com', city: 'surat' };
//     con.query('INsert INTO user SET ?', data, (err, result, fields) => {
//         if (err) throw err;
//         res(result);
//     })
// })

app.post('/postdata', (req, res) => {
    const data = req.body;
    con.query('INsert INTO user SET ?', data, (err, result, fields) => {
        if (err) throw err;
        res(result);
    })
})

// app.post('/postdata', (req, res) => {
//     const data = req.body;
//     const sql = "INSERT INTO customers (id, name,email,city) VALUES ('4', 'raj','raj@gmail.com','surat')";
//     con.query(sql, data, (err, result, fields) => {
//         if (err) throw err;
//         res.send('1 record inserted');
//     })
// })








// app.put("/:id", (req, res) => {
//     const data = [req.body.id, req.body.name, req.body.email, req.body.city]
//     con.query('UPDATW user SET id= ?, name= ?, email= ?, city= ?,')(
//         data, (error, result, fields) => {
//             if (error) throw error;
//             res.send(result)
//         }
//     )
// })







app.delete('/:id', (req, res) => {
    res.send(req.params.id)
})




app.listen(3000);