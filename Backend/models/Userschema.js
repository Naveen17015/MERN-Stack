var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Phone: { type: Number, required: true, unique: true },
  Date: { type: Date, default: Date.now },
});

var Users = mongoose.model("Users", UserSchema);

module.exports = Users;
