// Connecting mongoose to MongoDB
const mongoose = require("mongoose");
const { localKey, onlineKey } = require("./mongo.config");
mongoose.Promise = global.Promise;


mongoose.connect(
    localKey, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
);

// Importing schema for default courses
const {
    defaultSemSchema
} = require("./schemas/defaultSem");

// The main schema object which we will use to query
const defaultSem = mongoose.model("defsem", defaultSemSchema);

// Adding and deleting
async function main() {
    // Resetting the document
    await defaultSem.deleteMany({});

    const data = require("./initData/defaultSem.json");
    for(i=0; i<data.length; i++){
        await defaultSem.create({
            sem: data[i].sem,
            courses: data[i].courses
        });
    }

    // Exiting...
    return process.exit(0);
}
main().catch((er) => console.log(er));