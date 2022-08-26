// In src/index.js 
const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

const authRoutes = require('./v1/routes/auth')
const v1EmployeeRouter = require("./v1/routes/employeeRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));

// CONNECT DB MONGOO
const uri = `mongodb://localhost:${process.env.DBPORT}/${process.env.DBNAME}`;
mongoose.connect(uri)
.then(()=>console.log('Database is ready'))
.catch(e => console.log('Error db:',e));


// ROUTERS 
app.use('/api/v1/auth',authRoutes);
app.use("/api/v1/employees", v1EmployeeRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});