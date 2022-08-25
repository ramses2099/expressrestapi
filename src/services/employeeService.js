//In src/controllers/employeeService
const employeeService = require('../services/employeeService');

const getEmployees = (req, res) => {
    const allEmployees = employeeService.getEmployees();
    res.send('Get All employees');
}

const getOneEmployee = (req, res) => {
    const employee = employeeService.getOneEmployee();    
    res.send('Get an existing employees');
}

const createNewEmployee = (req, res) => {
    const createEmployee = employeeService.createNewEmployee();
    res.send('Create a new employees');
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
