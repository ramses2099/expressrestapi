//In src/v1/routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('./validate-token');

const employeeController = require('../../controllers/employeeController');

/**
 * @openapi
 * /api/v1/employees:
 *   get:
 *     tags:
 *       - Employees
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get('/', verifyToken, employeeController.getEmployees);

router.get('/:employeeId', employeeController.getOneEmployee);

router.post('/', employeeController.createNewEmployee);

router.patch('/:employeeId', employeeController.updateOneEmployee);

router.delete('/:employeeId', employeeController.deleteOneEmployee);

module.exports = router;

