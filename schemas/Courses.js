const mongoose = require('mongoose');
const {Schema} = mongoose;

const CoursesSchema = new Schema({
    courseCode: String,
    courseTitle: String,
    courseType: String,
    courseCredits: Number
})

mongoose.model('courses', CoursesSchema);