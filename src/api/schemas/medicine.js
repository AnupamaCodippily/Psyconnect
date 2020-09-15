const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let drug = new Schema(
  {
    name: {
      type: String
    },
    index : {
      type : Number
    }
  },
  { collection: "drugs" }
);

module.exports = mongoose.model("drugs", drug);