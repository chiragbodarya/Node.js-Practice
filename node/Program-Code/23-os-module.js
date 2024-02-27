const os = require('os')



// it is provied the architecture

console.log(os.arch())



// it is provied the free memory in your system

console.log(os.freemem() / (1024 * 1024 * 1024))



// it is provied the total memory in your system

console.log(os.totalmem() / (1024 * 1024 * 1024))



// it is provied the hostname

console.log(os.hostname())



// it is provied the platform

console.log(os.platform())



// it is provied the user information

console.log(os.userInfo())