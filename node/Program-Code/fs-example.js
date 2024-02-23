const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');



// this code is use to create a new file use loop

for (i = 1; i <= 5; i++) {
    // fs.writeFileSync(dirPath + `hello${i}.txt`, 'this is a demo file for writeFileSync in a loop')
    fs.writeFileSync(dirPath + '/hello' + i + '.txt', 'this is a demo file for writeFileSync in a loop')
};



// this code is a read a file name in selectes directory

fs.readdir(dirPath, (err, files) => {
    files.forEach((item) => {
        console.log('file name is : ' + item)
    })
})