const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')





// this code from password security use bcrypt
const securePassword = async (password) => {
    try {
        const passwordHash = await bcrypt.hash(password, 10)
        return passwordHash;
    } catch (error) {
        console.log(error.message)
    }
}


//this code is use to send email
const sendVarifyMail = async (name, email, user_id) => {
    try {
        const transporter = nodemailer.createTransport({
            // this host and port ans auth is all detail provied bt smtp server do first creat this server after try this code 
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            service: 'gmail',
            auth: {
                user: '',//enter your email
                pass: '',//enter email password //wer wer rwewf like this --  this is a pssword form smtp server
            },
        })
        const mailOptions = {
            from: '',
            to: email,
            subject: 'for verifivation email use nodemailer',
            // text: 'That was easy!',
            html: '<h1>wellcome ' + name + '</h1> <br> <a href="http://localhost:3000/verify?id=' + user_id + '"><h3>verify</h3></a>' //enter message code
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (error) {
        console.log("error", error)
    }
}


const verifyMail = async (req, res) => {
    try {
        const upadateInfo = await User.updateOne({ _id: req.query.id }, { $set: { is_varified: 1 } });
        console.log(upadateInfo);
        res.render('email-verified')
    } catch (error) {
        console.log(error.message)
    }
}


//this code work is render the /registration
const loadRegister = (req, res) => {
    try {
        res.render('registration')
    } catch (error) {
        console.log(error)
    }
}


// this controller is use to collect the data form /registration router and set data in data base
const insertUser = async (req, res) => {
    try {
        const spassword = await securePassword(req.body.password);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mno,
            image: req.file.filename,
            password: spassword,
            is_admin: 0
        })
        const userData = await user.save();
        if (userData) {
            sendVarifyMail(req.body.name, req.body.email, userData._id);
            res.render('registration', { message: 'your registration has benn successfull, please varified your email' })
        } else {
            res.render('registration', { message: 'your registration has benn failed' })
        }
    } catch (error) {
        console.log(error.message);
    }
}



// this code is login use code render the /login
const loginLoad = async (req, res) => {
    try {
        res.render('login')
    } catch (error) {
        console.log('Error', error.message);
    }
}


//this code is verify login
const verifyLogin = async (req, res) => {
    try {
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        const userData = await User.findOne({ email: userEmail });
        if (userData) {
            const passwordMatch = await bcrypt.compare(userPassword, userData.password);
            if (passwordMatch) {
                if (userData.is_varified === 0) {
                    res.render('login', { message: 'pleace verify your email' })
                } else {
                    req.session.user_id = userData._id;
                    res.redirect('/home')
                }
            } else {
                res.render('login', { message: 'email and password are incorrect' })
            }
        } else {
            res.render('login', { message: 'email and password are incorrect' })
        }
    } catch (error) {
        console.log('Error', error.message);
    }
}

const userLogout = async (req, res) => {
    try {
        req.session.destroy();
        res.redirect('/');
    } catch (error) {
        console.log('error', error.message);
    }
}



// this code is render the home page /home route
const loadHome = async (req, res) => {
    try {
        res.render('home')
    } catch (error) {
        console.log('error', error.message);
    }
}


module.exports = { loadRegister, insertUser, verifyMail, loginLoad, verifyLogin, loadHome, userLogout }