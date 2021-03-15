// Connecting mongoose to MongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/test-database`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// Creating schema
mongoose.model('semester', new mongoose.Schema(
    {
        number: {type: Number},
        listOfCourses: {type: [String]},
    },
    {versionKey: false}
));

// The main schema object which we will use to query
const Semesters = mongoose.model('semester');

// Adding and deleting
async function main(){
    // Resetting the document
    await Semesters.deleteMany({});

    // Inserting some data values
    data = require("./initData/sem.json");
    for(i=0; i<data.length; i++){
        await Semesters.create({
            number: data[i].number,
            listOfCourses: data[i].courses
        });
    }

    // Showing values
    console.log(await Semesters.find());

    
    return process.exit(0);
}
main()
.catch(er=>console.log(er));