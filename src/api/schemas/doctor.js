const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let doctor = new Schema(
  {
    name: {
      type: String
    },
    specialization : {
      type : String
    },
    email : {
      type : String
    },
    password : {
      type : String
    }
  },
  { collection: "doctors" }
);

module.exports = mongoose.model("doctors", doctor);