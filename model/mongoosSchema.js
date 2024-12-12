const mongoose = require("mongoose");
const { Schema } = mongoose;

// schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("user", UserSchema);
// database me data insert model se hota hai jo mongoose banata hai, model ki help se hum CRED operations kar sakte hai MongoDB me.
