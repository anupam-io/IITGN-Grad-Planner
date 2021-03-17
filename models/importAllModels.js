const mongoose = require('mongoose');

const courseSchema = require('./../schemas/Course');
// Import and create all schemas in a similar way

mongoose.model('courses', courseSchema);