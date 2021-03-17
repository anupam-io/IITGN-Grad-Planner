const mongoose = require('mongoose');

defaultSemSchema = new mongoose.Schema({
    sem: Number,
    courses: [String]
}, {versionKey: false});

module.exports = {defaultSemSchema}