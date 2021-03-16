const mongoose = require('mongoose');

defaultCoursesSchema = new mongoose.Schema({
    sem: String,
    listOfCourses: [{id: String, name: String}],
}, {versionKey: false});

module.exports = {defaultCoursesSchema}