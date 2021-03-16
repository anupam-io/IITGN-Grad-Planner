const mongoose = require('mongoose');

const defaultCoursesSchema = require('./../schemas/defaultCourses');
// Import and create all schemas in a similar way

mongoose.model('DCS', defaultCoursesSchema);