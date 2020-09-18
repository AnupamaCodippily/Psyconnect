const mongoose = require("mongoose");

const Schema = mongoose.Schema;



let appointment = new Schema(
  {
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    session_id : {
      type : mongoose.Schema.Types.ObjectId,
      required: true
    },
    patient_number : {
      type : Number
    },
    completed : {
      type : Boolean
    },
    delayed : {
      type : Boolean
    },
    patient_age : {
      type : Number
    }
  },
  { collection: "appointments" }
);

module.exports = mongoose.model("appointments", appointment);