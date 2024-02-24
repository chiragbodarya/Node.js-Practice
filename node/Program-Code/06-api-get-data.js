const fs = require('fs')

const input = process.argv;

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
} else {
    console.log('invalied input')
}


// try this all input type all output are difrencess

//node api-get-data.js add demo.txt 'this is a demo file'
//node api-get-data.js remove demo.txt
//node api-get-data.js adf demo.txt