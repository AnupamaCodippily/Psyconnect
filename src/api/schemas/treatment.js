const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let treatment = new Schema(
  {
    patient_age: {
      type: Number
    },
    condition_code : {
      type : Number
    },
    medication_index : {
      type : Number
    },
    dosage_mg : {
      type: Number
    }
  },
  { collection: "treatment_data" }
);

module.exports = mongoose.model("treatment_data", treatment);