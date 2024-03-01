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
            // host: 'smtp.gmail.com',
            // port: 3000,
            // secure: false,
            // requireTLS: true,
            service: 'gmail',
            auth: {
                user: 'davidgujju01@gmail.com',//enter your email
                password: 'CHIRAG$$0505r',//enter email password
            },
            // connectionTimeout: 1 * 60 * 1000,
        })
        const mailOptions = {
            from: 'davidgujju01@gmail.com',
            to: email,
            subject: 'for verifivation email use nodemailer',
            // text: 'That was easy!',
            html: '<h1>wellcome ' + name + '</h1> <br> <a href="http://localhost:3000/verify?id=' + user_id + '"><h3>verify</h3></a>' //enter message code
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error.message);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (error) {
        console.log(error.message)
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



module.exports = { loadRegister, insertUser, verifyMail }