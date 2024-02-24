//try all code one by one


//this example of synchronous

console.log('this is a first comand');

console.log('this is a logic comand');

console.log('this is a other comand');


//this example of asynchronous 

console.log('this is a first comand');

setTimeout(() => {
    console.log('this is a logic comand');
}, 2000);

console.log('this is a other comand');
