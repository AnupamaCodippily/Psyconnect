const express = require('express');
const router = express.Router();

const sessionSchema = require('../schemas/session');
const appoinmentSchema = require('../schemas/appointment');

const e = require('express');


const mongoose = require('mongoose')

var uri = process.env.MONGODB_URI || "mongodb://localhost:27017/psyconnect_db";


    var sessions = [

        {
            id: 9003,
            date : {
                day : 11,
                month : 11,
                year : 2020  
            },
            time : {
                hour: 18,
                mins: 45
            },         
            patientsCount: 49
        },
        {
            id: 9004,
            date : {
                day : 12,
                month : 11,
                year : 2020  
            },
            time : {
                hour: 18,
                mins: 45
            },         
            patientsCount: 67
        }

    ]

// router.get( '/:doctorId/:date', (req, res) => {
//     res.json(sessions);
// } );

router.post( '', (req, res) => {

    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

    // check if appoinments are full
    sessionSchema.findOne({ _id: req.body.sessionId }, 
        (err1, result) => {
            if (err1) {
                res.json({ success: false, available : false });
            }
            else if (result) {
                if ( result.appointments >= result.patient_limit ) {
                    res.json({ success: true, available : false })
                } 
                else {

                    sessionSchema.findByIdAndUpdate({ _id: req.body.sessionId}, { $inc : { "appointments" : 1 } },
                     (err2, result2) => {
                         if (err2) {
                            res.json({ success: false, available : false });
                         } else {
                             appoinmentSchema.create( { 
                                "session_id" : mongoose.Types.ObjectId(result._id),
                                "patient_number" : result2.appointments +1 ,
                                "patient_id" : mongoose.Types.ObjectId(req.body.patientId),
                                "completed" : false,
                                "delayed" : false
                              } ,
                              (err3, result3) => {
                                    if ( err3) 
                                        res.json({ success: false, available : false });
                                    else 
                                        res.json( { success: true, available: true })
                                    }
                              )
                         }
                     } )

                }
            } 
        })
} )


router.get('/complete/:appointment_id', (req, res) => {

    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

    try {
        
        appoinmentSchema.updateOne({_id : req.params.appointment_id}, { completed : true }, {}, (err, result) => {
            if (err) res.json({error : true})
            else res.json({error: false})
        })
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;