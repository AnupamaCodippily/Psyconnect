const express = require('express');
const router = express.Router();

const conditionSchema = require('../schemas/condition');

const e = require('express');


const mongoose = require('mongoose')

var uri = process.env.MONGODB_URI || "mongodb://localhost:27017/psyconnect_db";


// fetch all the medical conditions
router.get( '/list', (req, res) => {

    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

    conditionSchema.find({}, 
        (err, result) => {
            if (err) {
                res.json({ success: false });
            }
            else if (result) {
                res.json(result)
            } 
        })


} )

module.exports = router;