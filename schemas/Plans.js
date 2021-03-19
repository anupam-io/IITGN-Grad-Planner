const mongoose = require('mongoose');

planSchema = new mongoose.Schema({
    name: {type: String, unique: true},
    data: [[[[String]]]]
}, {versionKey: false});

module.exports = {planSchema}