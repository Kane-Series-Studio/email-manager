function saveToDB(){
const code = Math.floor(Math.random() * 999999) + 111111;
var code_element = document.getElementById("code-value").innerHTML = code;

const mongoose = require('mongoose')
const codeSchema = mongoose.Schema({
    code: String
})
module.exports = mongoose.model("Codes", codeSchema);

const mongodb = require('mongodb');
mongoose.connect('mongodb://localhost:27017/KaneSeries', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
const newCode = new codeSchema({
    code: code
})
newCode.save();
}

document.onload = saveToDB();