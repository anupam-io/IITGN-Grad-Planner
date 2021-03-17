const mongoose = require('mongoose');

const {
    coursesSchema
} = require("./../schemas/Course");
// Import and create all schemas in a similar way

mongoose.model('courses', coursesSchema);