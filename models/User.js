const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Contact = require('./Contact.js')

let User = new Schema({
    email: {type: String},
    id: {type: String},
    
});


module.exports = mongoose.model('User', User);