const nodemailer = require('nodemailer');
const config = require('./config/email.json');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${config.email}`,
      pass: `${config.password}`
    }
  });
  
  var mailOptions = {
    from: `${config.email}`,
    to: 'rsrudd@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });