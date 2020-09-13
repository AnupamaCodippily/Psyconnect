const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let session = new Schema(
  {
    doctor_id: {
      type: mongoose.Schema.Types.ObjectId
    },
    date : {
      type : Date
    },
    patient_limit : {
      type : Number
    },
    appointments : {
      type: Number
    }
  },
  { collection: "sessions" }
);

module.exports = mongoose.model("sessions", session);