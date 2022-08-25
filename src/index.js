// In src/index.js 
const express = require("express"); 
const bodyParser = require("body-parser");
const v1EmployeeRouter = require("./v1/routes/employeeRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

//MIDDLEWARE
app.use(bodyParser.json());

// ROUTERS 
app.use("/api/v1/employees", v1EmployeeRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});