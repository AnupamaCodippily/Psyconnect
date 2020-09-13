const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')

const doctorSchema = require('../schemas/doctor')
const sessionSchema = require('../schemas/session')
const appointmentSchema = require('../schemas/appointment');

var uri = process.env.MONGODB_URI || "mongodb://localhost:27017/psyconnect_db";

router.post( '/auth', (req, res) => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    var docId = req.body.doctorId ;
    var password = req.body.password ;

    doctorSchema.findOne({ email: docId, password: password }, function (err, doctor) {
        if (err) {
            res.json({requestBody: req.body, message: "invalid user", userIsValid : false})
        } 
        else if ( doctor ) {
            res.json({ message: "success so far!", userIsValid : true, doctorDetails : doctor})
        }
    });

} );

router.post('', (req,res) => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    let regexp = new RegExp(req.body.doctorName)

    doctorSchema.aggregate([
        {
            $match : {
                "name" : {
                    "$regex" : regexp,
                    "$options": "i"
                },
                "specialization": req.body.specialization
            }
        },
        {
            $lookup : {
                "from" : "sessions",
                "localField": "_id",
                "foreignField": "doctor_id",
                "as" : "doctorSessions"
            }
        },  
        {
            $project : {
                "_id": 1,
                "name": 1,
                "specialization": 1,
                "doctorSessions":
                {
                    $filter: 
                    {
                        "input" : "$doctorSessions",
                        "as" : "doctorSession",
                        "cond" : { $gte: [ "$$doctorSession.date", new Date().toISOString() ] }
                    }
                }
            }
        },

    ],
    (err, result) => {
        if (err) {
            res.json({result: [], success : false})
        }
        else {
            res.json({result: result, success: true })
        }
    }
    )

})


router.get('/sessions/:docId', (req, res) => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    var docId = req.params.docId ;

    sessionData = [];

    sessionSchema.aggregate([
        {
           $match: {
                "doctor_id": mongoose.Types.ObjectId(docId)
            }
        },
        {
            $lookup: {
                from: "appointments",
                localField: "_id",
                foreignField: "session_id",
                as : "sessionAppointments"
            }
        }
    ],
    (err, result) => {
        if (err) {
            console.log("error fetching session data")
        }
        else {
            result.map( data => {
                sessionData.push({ 
                 session:
                    {
                        "_id" : data._id,
                        "doctor_id": data.doctor_id,
                        "date": data.date,
                        "patient_limit": data.patient_limit,
                    },
                appointmentCount: data.sessionAppointments.length
                })
            } )

            res.json({sessionData: sessionData})
        }
    });

});

router.post('/sessions/:docId', (req, res) => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    let success;
    let message = "";
    sessionSchema.create( 
        {
            doctor_id : req.params.docId,
            date:  req.body.dateTime,
            patient_limit: req.body.max_patients,
            appointments : 0
        },
        (err, result) => {
            if (err) 
                {
                    console.log(err)
                    success = false;
                }
            else 
                success = true;
            
            res.json({success : success, message: message});
            }
    );


});


router.get('/appointments/next/:sessionId', (req, res) => { 
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
// get the next incomplete appointment
   appointmentSchema.find({ session_id : req.params.sessionId, completed :false, delayed : false},
        (err,appointment) => {
            res.json( { appointment : appointment } )
        }
    ).sort( { patient_number : 1 })
    // .limit(1);

});



module.exports = router;