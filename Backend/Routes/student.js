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

//Get All Students

router.get('/student/studentall',(req,res) =>{

    Students.find().exec((err,students) =>{
        if(err){
            return res.status(400).json({
                error:err
          });
        }

        return res.status(200).json({
            success:true,
            existingPosts:students
        });
    });
});


//Update Student

router.put('/student/updatestudent/:id', (req,res) => {

    Students.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },

        (err,student) =>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }

            return res.status(200).json({
                success:"Student Updated sucessfully",student

            });
        }
    );
});

//Delete Student

router.delete('/student/deletestudent/:id', (req,res) => {

    Students.findByIdAndRemove(req.params.id).exec((err,deleteStudent) => {

        if(err){

            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Student Deleted Successfully",deleteStudent
        })
    });
});

module.exports = router;

