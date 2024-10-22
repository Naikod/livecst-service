const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: { type: String, require: true },
  created_at: { type: Date, require: true, default: Date.now },
  updated_at: { type: Date, require: true, default: Date.now },
});

const Roles = mongoose.model('Roles', RoleSchema);

module.exports = Roles
