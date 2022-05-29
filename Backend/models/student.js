const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

     studentname:{
         type:String,
         require:true
     },

     username:{
        type:String,
        required:true
    },


     password:{
        type:String,
        required:true
    },

     email:{
         type:String,
         required:true
     },

     mobilenumber:{
        type:String,
        required:true
    },

    nic:{
        type:String,
        required:true
    },

    joindate:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    course:{
        type:String,
        required:true
    },
      


});

module.exports = mongoose.model('Students' , studentSchema);