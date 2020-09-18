const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let medication = new Schema(
  {
    prescription: {
        type: Array
      },
      patient_id: {
          type: mongoose.Schema.Types.ObjectId
      },
      appointment_id: {
          type: mongoose.Schema.Types.ObjectId
      },
    date : {
      type : Date
    }
  },
  { collection: "medication" }
);

module.exports = mongoose.model("medication", medication);