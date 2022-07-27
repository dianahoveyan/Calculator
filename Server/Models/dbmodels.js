const mongoose = require('mongoose')

const savedValue = new mongoose.Schema({
    value: String,
    createdTime: String
});
exports.calculatorValue  = mongoose.model('calculatorValue', savedValue);

