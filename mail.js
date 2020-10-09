const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth:{
        api_key: 'd188d04527c63f27b6f811ad1c8d1010-0d2e38f7-1467eee5',
        domain : 'sandbox98e4307653a345d5b465ddb065655866.mailgun.org'
    }
};
const transporter= nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) =>{
    const mailOptions = {
        from: email,
        to: 'sayconofficial1@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err){
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
};

module.exports = sendMail;
