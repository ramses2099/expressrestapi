const authService = require('../services/authService');

const register = async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: 'password'
    };

    try {
        const saveUser = await authService.register(user);

        res.json({error:null, data:saveUser});

    } catch (error) {
        res.status(400).json({error});
    }

}

module.exports = {register}