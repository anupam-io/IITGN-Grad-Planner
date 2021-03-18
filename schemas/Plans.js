const mongoose = require('mongoose');

planSchema = new mongoose.Schema({
    name: String,
    data: [[[[String]]]]
}, {versionKey: false});

module.exports = {planSchema}