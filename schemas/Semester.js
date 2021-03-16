const mongoose = require('mongoose');
const {Schema} = mongoose;

const SemesterSchema = new Schema({
    total_credits: Number,
    SPI: Float32Array,
    courses: []
})

mongoose.model('semester', SemesterSchema);