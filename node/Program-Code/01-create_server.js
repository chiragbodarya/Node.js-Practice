
// this code is use to create a server

const http = require('http');

http.createServer((req, res) => {
    res.write('<h1>this is a demo of how to create server</h1>');
    res.end();
}).listen(3000);