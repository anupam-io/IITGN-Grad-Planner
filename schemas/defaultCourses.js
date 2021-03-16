const mongoose = require('mongoose');

defaultCoursesSchema = new mongoose.Schema({
    courseCode: String,
    courseTitle: String,
    courseType: String,
    courseCredits: Number
}, {versionKey: false});

module.exports = {defaultCoursesSchema}