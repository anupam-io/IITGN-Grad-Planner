// Connecting mongoose to MongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/test-database`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Importing schema for default courses
const {defaultCoursesSchema} = require('./schemas/defaultCourses');
// The main schema object which we will use to query
const defaultCourses = mongoose.model('DCS', defaultCoursesSchema);


// Adding and deleting
async function main(){
    // Resetting the document
    await defaultCourses.deleteMany({});

    // Inserting some data values
    data = require("./initData/defaultCourses.json");
    for(i=0; i<data.length; i++){
        await defaultCourses.create({
            courseCode: data[i].courseCode,
            courseTitle: data[i].courseTitle,
            courseType: data[i].courseType,
            courseCredits: data[i].courseCredits
        });
        // console.log(data[i]);
    }

    // Showing values
    console.log("All courses");
    console.log(await defaultCourses.find());
    
    // Exiting...
    return process.exit(0);
}
main()
.catch(er=>console.log(er));