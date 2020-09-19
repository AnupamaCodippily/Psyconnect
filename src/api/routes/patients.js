const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')

const patientSchema = require('../schemas/patient')
const appoinmentSchema = require('../schemas/appointment')
const sessionSchema = require('../schemas/session')


var uri = process.env.MONGODB_URI || "mongodb://localhost:27017/psyconnect_db";



router.post( '/auth', (req, res) => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    var patientId = req.body.patientId ;
    var password = req.body.password ;

    patientSchema.findOne({ email: patientId, password: password }, function (err, patient) {
        if (err) {
            res.json({requestBody: req.body, message: "invalid user", userIsValid : false})
        } 
        else if ( patient ) {
            res.json({ message: "success so far!", userIsValid : true, patientDetails : patient})
        }
    });

} );

router.get( '/age/:id', (req, res) => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    patientSchema.findOne( { _id:  req.params.id}, { dob:1 }, (err, result) => {
        if (!err && result){

            let thisYear = new Date().getFullYear()
            let birthYear = new Date(result.dob).getFullYear()

            let age = thisYear - birthYear

            res.json({ 'age': age})
        }
    } )
} )

router.get('/appointments/:patientId', (req, res) => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    var patientId = req.params.patientId;
    
    appoinmentSchema.aggregate( 
        [ 
           { $match : {
                $and: [
                    {patient_id: mongoose.Types.ObjectId(patientId)},
                    {completed: false }
                ]
                }
            },
            {
                $lookup : { 
                from : 'sessions', 
                localField : 'session_id', 
                foreignField: '_id', 
                as : 'sessionDetails',
                
                }
            },
            {
                $unwind : "$sessionDetails"
            },
            {
                $lookup : {
                    from : 'doctors',
                    localField: 'sessionDetails.doctor_id',
                    foreignField: '_id',
                    as : 'doctorDetails'
                },
                 
            },
            {
                $unwind : "$doctorDetails"
            },
            {
                $project :   {
                    "_id": 1,
                    "patient_id": 1,
                    "session_id": 1,
                    "patient_number": 1,
                    "completed": 1,
                    "delayed": 1,
                    "sessionDetails": {
                        "_id": 1,
                        "date": 1,
                    },
                    "doctorDetails": {
                        "_id": 1,
                        "name": 1,
                        "specialization": 1
                    }
                }
            }
    ] )
    .then( resu =>{ 
        res.json(resu)
    } )
    .catch(
        err => {console.log(err)}
    )
   
})


// creating a new patient in sign-up
router.post( '', ( req, res ) => {
    mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

    patientSchema.create({
        name: req.body.name,
        dob : req.body.dob,
        email: req.body.email,
        password: req.body.password
    },
    ( err, result ) => {
        if (!err) 
            res.json({ success : true })
    })
})




module.exports = router;