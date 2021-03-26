const nodemailer = require('nodemailer');
const config = require('./config/email.json');
const email_config = require('./config/email-content.json');
const emailSchema = require('./database_logger');
const dbConnect = require('./db_connection')
var Imap = require('imap');

var imap = new Imap({
    user: `${config.email}`,
    password: `${config.password}`,
    host: 'imap.gmail.com',
    port: 993,
    tls: true
  });

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
  to: `${config.sendTo}`,
  subject:  `${email_config['confirmation-sent'].topic}`,
  text: `${email_config['confirmation-sent'].content}`,
  messageId: true
}).then(dbLOG => {

const emailNote = new emailSchema({
    email: `${config.sendTo}`,
    type: "recieved",
})
emailNote.save();

})
