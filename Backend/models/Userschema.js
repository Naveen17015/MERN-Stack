var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Phone: { type: Number, required: true },
});

var Users = mongoose.model("Users", UserSchema);

module.exports = Users;
