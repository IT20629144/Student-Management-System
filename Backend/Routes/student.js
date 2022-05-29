const express = require ('express');

const Students = require('../models/student');

const router = express.Router();


//Save Student


router.post('/student/add',(req,res) => {

     let newStudent = new Students(req.body);

     newStudent.save((err) =>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Student Saved Successfully"
        });
     });
});

module.exports = router;
