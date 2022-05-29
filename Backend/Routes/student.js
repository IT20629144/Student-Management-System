const express = require ('express');
const { find } = require('../models/student');


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

//get all students

// router.get('/student/studentall',(req,res) =>{

//     Students.find().exec((err,students) =>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//           });
//         }

//         return res.status(200).json({
//             success:true,
//             existingPosts:students
//         });
//     });
// });

router.get('/student/studentall',(req,res) =>{
    
    Students.find().exec((err,students) =>{
        if(err){
            return res.status(400).json({
               
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            exeistingStudents:students
        });
    });
});

module.exports = router;