// const mongoose = require("mongoose");

// async function Main() {
//   await mongoose
//     .connect("mongodb://127.0.0.1:27017/mern")
//     .then(() => console.log("Connected: MongoDB"))
//     .catch((err) => console.log("MongoDB Erroe:", err));
// }

// // main().catch((err) => console.log(err));
// Main();

const mongoose = require("mongoose");

async function cnnectiMongoDB(url) {
  return mongoose.connect(url);
}

module.exports = {
  cnnectiMongoDB,
};
