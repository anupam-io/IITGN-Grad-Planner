// Connecting mongoose to MongoDB
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

let localMongo = `mongodb://localhost:27017/test-database`;
let onlineMongo = `mongodb+srv://test:test@hackrush-2021.ojnjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(localMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// Importing schema for default courses
const { planSchema } = require("./schemas/Plans");

// The main schema object which we will use to query
const courses = mongoose.model("plans", planSchema);

// Adding and deleting
async function main() {
  // Resetting the document
  await courses.deleteMany({});

  // Addign a plan
  await courses.create({
    name: "test",
    data: [[[[1]]]],
  });

  // Exiting...
  return process.exit(0);
}
main().catch((er) => console.log(er));
