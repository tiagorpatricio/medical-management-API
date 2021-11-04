const connection = require('../utils/connection')
const patientSchema = require('../models/patient')

exports.getAllPatients = (req, res) => {

 
   connection.query('CALL Get_All_Patients()', (err, rows) => {
            if(err) throw err 
            else { 
                res.send(rows)
            }
        })
       
    
}

exports.getAllAdmittedPatients = (req, res) => {
 
    connection.query('CALL Get_All_Patients_Admitted()', (err, rows) => {
        if(err) throw err
        else {
            res.send(rows)
        }
    })
 
}