const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  profile_picture: { type: String, require: true, default: "https://www.gravatar.com/avatar"},
  role_id: { type: Schema.Types.ObjectId, require: true, default: new mongoose.Types.ObjectId("6716141e76a792d317b29b34"), ref: "Roles"},
  status: { type: String, require: true, default: "" },
  created_at: { type: Date, require: true, default: Date.now },
  updated_at: { type: Date, require: true, default: Date.now },
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users