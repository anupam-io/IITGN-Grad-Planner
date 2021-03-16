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
const {coursesSchema} = require('./schemas/Course');
// The main schema object which we will use to query
const courses = mongoose.model('courses', coursesSchema);


// Adding and deleting
async function main(){
    // Resetting the document
    await courses.deleteMany({});

    // Inserting from sem1
    data = require("./initData/sem1.json");
    for(i=0; i<data.length; i++){
        await courses.create({
            id: data[i].id,
            name: data[i].name,
            credits: data[i].credits,
            profs: data[i].profs,
            type: data[i].type
        });
    }
    data = require("./initData/sem2.json");
    for(i=0; i<data.length; i++){
        await courses.create({
            id: data[i].id,
            name: data[i].name,
            credits: data[i].credits,
            profs: data[i].profs,
            type: data[i].type
        });
    }

    // Showing values
    console.log("All courses");
    console.log(await courses.find());
    
    // Exiting...
    return process.exit(0);
}
main()
.catch(er=>console.log(er));