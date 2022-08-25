const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllEmployees = () =>{
    return DB.employees;
};

const createNewEmployee = (newEmployee) => {
    const isAlreadyAdded = DB.employees.findIndex((e)=>e.first_name===newEmployee.id) > 1;
    if(isAlreadyAdded){
        return;
    }

    DB.employees.push(newEmployee);
    saveToDatabase(DB);

    return newEmployee;
}

module.exports ={
    getAllEmployees,
    createNewEmployee,
}