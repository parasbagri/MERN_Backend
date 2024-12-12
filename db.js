// const mongoose = require("mongoose");

// async function Main() {
//   await mongoose
//     .connect("mongodb://127.0.0.1:27017/mern")
//     .then(() => console.log("Connected: MongoDB"))
//     .catch((err) => console.log("MongoDB Erroe:", err));
// }

// // main().catch((err) => console.log(err));
// Main();

// const mongoose = require("mongoose");

// async function cnnectiMongoDB(url) {
//   return mongoose.connect(url);
// }

// module.exports = {
//   cnnectiMongoDB,
// };
// ===================================================================================================================================

// const mongoose = require("mongoose");
// // MongoDB Atlas ka URL
// const mongoAtlasURL =
//   "mongodb+srv://coder:shashi890@cluster0.4lttu.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0";

// // Function to connect to MongoDB
// const mongoDB = async () => {
//   // Mongoose connect method with async/await
//   await mongoose.connect(mongoAtlasURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// };

// module.exports = mongoDB;

const mongoose = require("mongoose");

// MongoDB Atlas ka URL
const mongoAtlasURL =
  "mongodb+srv://coder:shashi890@cluster0.4lttu.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0";

// Function to connect to MongoDB
const mongoDB = async () => {
  try {
    // Mongoose connect method with async/await
    const connection = await mongoose.connect(mongoAtlasURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
    // List collections in the "gofood" database
    // const db = connection.connection.db; // Access the raw MongoDB connection

    // const collections = await db.listCollections().toArray(); // Get all collections
    // console.log("Collections in gofood database:");
    // collections.forEach((collection) => {
    //   // console.log(`- ${collection.name}`);
    // });
    // data fetch by foodCategory
    // const dataFetch = db.collection("foodCategory");
    // const result = await dataFetch.find().toArray();
    // console.log("Data fetched from foodCategory collection:", result);

    // data fetch by item_category
    // const foodtada = db.collection("foodData2");
    // const reult = await foodtada.find({}).toArray();
    // console.log("Data fetched from foodData2 collection:", reult);
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
};

module.exports = mongoDB;
