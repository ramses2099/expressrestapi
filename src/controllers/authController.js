const authService = require('../services/authService');

const register = async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    try {
        const saveUser = await authService.register(user);

        res.json({error:null, data:saveUser});

    } catch (error) {
        res.status(400).json({error});
    }

}


const login = async (req, res) => {
    const user = {
        email: req.body.email,        
        password: req.body.password
    };

    try {
        const token = await authService.login(user);

        res.header('auth-token',token).json({error:null, data:'welcome...'});

    } catch (error) {
        res.status(400).json({error});
    }

}



module.exports = {register,login}