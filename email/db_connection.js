const connectionDB = () => {
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/KaneSeries", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
}
exports.connectionDB = connectionDB;