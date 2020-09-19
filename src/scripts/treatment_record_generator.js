const express = require("express");
const app = express();

// generate random treatment records

const num = 200
const max_age = 70
const num_conditions = 5
const num_meds = 99

const createRandom = ( num, maxAge, con, med ) => {
    let arr = []

    for( let i = 0;  i < num; i++) {
        let obj = {
            patient_age: Math.floor(Math.random() * maxAge),
            condition_code: Math.floor(Math.random() * con),
            medication_index: Math.floor(Math.random() * med)
        }   

        arr.push(obj)
    }

    let jsonArr = JSON.stringify( arr )

    return jsonArr
}


const createRandomWithBias = (num, maxAge, con_code, med_code) => {
    let arr = []

    for( let i = 0;  i < num; i++) {
        let obj = {
            patient_age: Math.floor(Math.random() * maxAge),
            condition_code: con_code,
            medication_index: med_code
        }   

        arr.push(obj)
    }

    let jsonArr = JSON.stringify( arr )

    return jsonArr
}

app.get( '/random/:num/:maxAge/:con/:med', (req,res) => {
    const jsonAnswer = createRandom(
        req.params.num,
        req.params.maxAge,
        req.params.con,
        req.params.med
    )

    res.send(jsonAnswer)
})


app.get( '/bias/:num/:maxAge/:con/:med', (req,res) => {
    const jsonAnswer = createRandom(
        req.params.num,
        req.params.maxAge,
        req.params.con,
        req.params.med
    )

    res.send(jsonAnswer)
})

app.listen(5000)

