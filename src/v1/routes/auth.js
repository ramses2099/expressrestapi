const express = require('express');
const router = express.Router();

//import from controller aut
const authController = require('../../controllers/authController');

/**
 * @openapi
 * /api/v1/auth/register:
 *   get:
 *     tags:
 *       - Auth
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
router.post('/register', authController.register);

/**
 * @openapi
 * /api/v1/auth/login:
 *   get:
 *     tags:
 *       - Auth
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
router.post('/login', authController.login);

module.exports = router;