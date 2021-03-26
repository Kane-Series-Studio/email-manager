const nodemailer = require('nodemailer');
const config = require('./config/email.json');
const email_config = require('./config/email-content.json');
const emailSchema = require('./database_logger');
const dbConnect = require('./db_connection')

dbConnect.connectionDB();
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: `${config.email}`,
        pass: `${config.password}`
    }
});

console.log('Recieved email');
transporter.sendMail({
from: `${config.email}`,
  to: 'rsrudd@gmail.com',
  subject:  `${email_config['confirmation-sent'].topic}`,
  text: `${email_config['confirmation-sent'].content}`,
  messageId: true
});