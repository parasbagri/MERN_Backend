const express = require("express");
const { cnnectiMongoDB } = require("./db");

const app = express();
const PORT = 2003;

app.use(express.json()); // middleware hai jo bady se data ko parse kar rha hai

// Connect to MongoDB
// connections into mongoose to mongoDB
cnnectiMongoDB("mongodb://127.0.0.1:27017/mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected: MongoDB"))
  .catch((err) => console.log("MongoDB Erroe:", err));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log("server running"));
