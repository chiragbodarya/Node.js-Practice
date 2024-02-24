
// the middeware diffiend in othe file 


module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send('enter age')
    } else if (req.query.age < 18) {
        res.send('you are not enter to the page')
    } else {
        next();
    }
}