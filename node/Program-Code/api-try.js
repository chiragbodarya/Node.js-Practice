
//this is example of api

const http = require('http');
const data = require('./data');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' });
    res.write(`this is a example of API \n`);
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000);