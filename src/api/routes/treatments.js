const express = require("express");
const router = express.Router();

const treatmentSchema = require("../schemas/treatment");

const e = require("express");

const mongoose = require("mongoose");

var uri = process.env.MONGODB_URI || "mongodb://localhost:27017/psyconnect_db";

// fetch data on a medicine
router.get("/data/:index", (req, res) => {
  mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  treatmentSchema.find(
    { medication_index: req.params.index },
    (err, result) => {
        if (!err && result)
            res.json(result)
    }
  );
});

// fetch data on a conditions
router.get("/data/condition/:index", (req, res) => {
  mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  treatmentSchema.find(
    { condition_code: req.params.index },
    (err, result) => {
        if (!err && result)
            res.json(result)
    }
  );
});

// create treatment record
router.post("", (req, res) => {
  mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });

  const medications = req.body.medication;
  const diagnoses = req.body.diagnosis;

  // each medication must be saved for each diagnosis
  Object.keys(medications).forEach((m) => {
    Object.keys(diagnoses).forEach((d) => {
      treatmentSchema.create(
        {
          patient_age: req.body.patient_age,
          condition_code: diagnoses[d].condition_code,
          medication_index: medications[m].medication_index,
          dosage: m.dosage,
        },
        (err, result) => {}
      );
    });
  });
});

module.exports = router;
