const express = require('express');
const router = express.Router();

const medicineSchema = require('../schemas/medicine');

const e = require('express');


const mongoose = require('mongoose')

var uri = process.env.MONGODB_URI || "mongodb://localhost:27017/psyconnect_db";


router.get( '/list', (req, res) => {

    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

    // check if appoinments are full
    medicineSchema.find({}, 
        (err1, result) => {
            if (err1) {
                res.json({ success: false, available : false });
            }
            else if (result) {
                res.json(result)
            } 
        })


} )

module.exports = router;