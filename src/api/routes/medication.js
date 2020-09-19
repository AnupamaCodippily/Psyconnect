const express = require('express');
const router = express.Router();

const medicationSchema = require('../schemas/medication');

const e = require('express');


const mongoose = require('mongoose')

var uri = process.env.MONGODB_URI || "mongodb://localhost:27017/psyconnect_db";


router.post('', (req, res) => {

    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });


    medicationSchema.create( { 
        prescription: req.body.prescription,
        date: req.body.date,
        appointment_id: req.body.appointment_id,
        patient_id: req.body.patient_id 
    }, ( err, result ) => {
        if (!err)
            res.json({success: true})
    } )

})

module.exports = router