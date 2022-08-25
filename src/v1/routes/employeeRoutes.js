//In src/v1/routes/employeeRoutes.js
const express = require('express');
const router = express.Router();

const employeeController = require('../../controllers/employeeController');

router.get('/', employeeController.getEmployees);

router.get('/:employeeId', employeeController.getOneEmployee);

router.post('/', employeeController.createNewEmployee);

router.patch('/:employeeId', employeeController.updateOneEmployee);

router.delete('/:employeeId', employeeController.deleteOneEmployee);

module.exports = router;

