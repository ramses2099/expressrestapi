//In src/controllers/employeeController
const employeeService = require('../services/employeeService');

const getEmployees = (req, res) => {
    const allEmployees = employeeService.getEmployees();
    res.send({status:"OK",data:allEmployees});
}

const getOneEmployee = (req, res) => {
    const employee = employeeService.getOneEmployee();    
    res.send('Get an existing employees');
}

const createNewEmployee = (req, res) => {

    const {body} = req;

    if(!body.first_name || !body.last_name || !body.email || 
    !body.gender || !body.ip_address){
        return;
    }

    const newEmployee = {
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        ip_address: body.ip_address,
    };
    
    const createEmployee = employeeService.createNewEmployee(newEmployee);
    res.status(201).send({status:"OK", data:createEmployee});
}

const updateOneEmployee = (req, res) => {
    const updatedEmployee = employeeService.updateOneEmployee();
    res.send('Update an existing employees');
}

const deleteOneEmployee = (req, res) => {
    employeeService.deleteOneEmployee();
    res.send('Delete an existing employees');
}

module.exports ={
    getEmployees,
    getOneEmployee,
    createNewEmployee,
    updateOneEmployee,
    deleteOneEmployee,
};
