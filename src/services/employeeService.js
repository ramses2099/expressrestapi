//In src/controllers/employeeService
const Employees = require('../database/employee');

const getEmployees = () => {
    const allEmployees = Employees.getAllEmployees();
    return allEmployees;
}

const getOneEmployee = () => {
    return;
}

const createNewEmployee = (newEmployee) => {
    return;
}

const updateOneEmployee = () => {
    return;
}

const deleteOneEmployee = () => {
    return;
}

module.exports ={
    getEmployees,
    getOneEmployee,
    createNewEmployee,
    updateOneEmployee,
    deleteOneEmployee,
};


