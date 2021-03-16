const mongoose = require('mongoose');

coursesSchema = new mongoose.Schema({
    id: String,
    name: String,
    credits: Number,
    profs: [String],
    type: [String]    
}, {versionKey: false});

module.exports = {coursesSchema}