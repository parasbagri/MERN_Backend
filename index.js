const express = require("express");
// const { cnnectiMongoDB } = require("./db");
const mongoDB = require("./db");
const cors = require("cors");
mongoDB();
const app = express();
const PORT = 2003;
// app.use((req,res,next)  => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization"
//   );
//   next();
// }
// )

app.use(cors());

app.use(express.json()); // middleware hai jo bady se data ko parse kar rha hai

// Connect to MongoDB
// connections into mongoose to mongoDB
// cnnectiMongoDB("mongodb://127.0.0.1:27017/mern", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("Connected: MongoDB"))
//   .catch((err) => console.log("MongoDB Erroe:", err));

// atlas se
// cnnectiMongoDB(
//   "mongodb+srv://coder:shashi890@cluster0.4lttu.mongodb.net/gofood?retryWrites=true&w=majority&appName=Cluster0",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
//   // async (err, result) => {
//   //   if (err) throw err;
//   //   console.log("Connected: MongoDB Paras");
//   //   // create a new collection called courses
//   //   const coursesCollection = await result.db("gofood").collection("courses");
//   // }
// )
//   .then(() => console.log("Connected: MongoDB"))
//   .catch((err) => console.log("MongoDB Erroe:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
// connect all routes for router folder
app.use("/api", require("./routes/createUser"));

app.listen(PORT, () => console.log("server running"));
