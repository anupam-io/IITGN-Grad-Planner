const mongoose = require('mongoose');

const {
    coursesSchema
} = require("../schemas/Course");
const {
    defaultSemSchema
} = require("../schemas/defaultSem");
const {
    planSchema
} = require("../schemas/Plans");

mongoose.model('courses', coursesSchema);
mongoose.model('defsem', defaultSemSchema);
mongoose.model('plans', planSchema);