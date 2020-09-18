const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let condition = new Schema(
  {
    name: {
      type: String
    },
    code : {
      type : Number
    }
  },
  { collection: "conditions" }
);

module.exports = mongoose.model("conditions", condition);