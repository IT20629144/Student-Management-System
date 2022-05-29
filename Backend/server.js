const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//import Routes
const studentRoutes = require('./Routes/student');


//app middlewares
app.use(bodyParser.json());

//Rotes
app.use(studentRoutes);

const port = 8000;

const DB_URL = 'mongodb+srv://ravindunirmal:ravindunirmal123@cluster0.sibwe6h.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB Connected');
})
 .catch((err) => console.log('DB Connecting Error' ,err));


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

