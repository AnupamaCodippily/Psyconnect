const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let patient = new Schema(
  {
    name: {
      type: String
    },
    email : {
      type : String
    },
    password : {
      type : String
    }
  },
  { collection: "patients" }
);

module.exports = mongoose.model("patients", patient);