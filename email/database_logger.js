const mongoose = require('mongoose')

const emailSchema = mongoose.Schema({
    email: String,
    type: String,
    timesent: { type: Date, default: Date.now},
})

module.exports = mongoose.model("email", emailSchema)