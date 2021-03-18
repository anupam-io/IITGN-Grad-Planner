const mongoose = require('mongoose');

const {
    coursesSchema
} = require("../schemas/Course");
const {
    defaultSemSchema
} = require("../schemas/defaultSem");


mongoose.model('courses', coursesSchema);
mongoose.model('defsem', defaultSemSchema);