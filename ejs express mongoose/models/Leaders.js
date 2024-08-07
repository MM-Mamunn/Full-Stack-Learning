const mongoose = require('mongoose');

const leadersSchema = new mongoose.Schema({
    name: String,
    stack:Number
});

const Leaders = mongoose.model('Leaders', leadersSchema);
module.exports = Leaders