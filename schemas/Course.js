const mongoose = require('mongoose');

coursesSchema = new mongoose.Schema({
    id: {type: String, unique: true},
    name: String,
    credits: Number,
    profs: [String],
    type: [String]    
}, {versionKey: false});

module.exports = {coursesSchema}