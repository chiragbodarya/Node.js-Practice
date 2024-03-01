const express = require('express');
const user_route = express();
const userController = require('../controllers/userController');




const ejs = require('ejs');
user_route.set('view engine', 'ejs');
user_route.set('views', './views/users');

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));


//this code is use to file upload in foorm    ----    use multer
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/userimages'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const upload = multer({ storage: storage });





// this is your router 
user_route.get('/registration', userController.loadRegister);

user_route.post('/registration', upload.single('image'), userController.insertUser);

user_route.get('/verify', userController.verifyMail);




module.exports = user_route;