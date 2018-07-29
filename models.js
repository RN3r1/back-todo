const mongoose = require('mongoose');
let connectionString = process.env.CONNECTION_STRING || 'sin string'
console.log(connectionString);

mongoose.connect(connectionString, {
    useNewUrlParser:true
});

const Note = mongoose.model('Note',{
    text:String,
    color:String
});

module.exports = Note;
