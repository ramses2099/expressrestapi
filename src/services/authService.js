const Joi = require('@hapi/joi')
const User = require('../database/model/User');

const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});


const register = async(inUser)=>{
    const { error } =schemaRegister.validate(inUser);
    
    if(error){
        throw error.details[0].message; 
    } 
    
    const user = new User({
        name: inUser.name,
        email: inUser.email,
        password: inUser.password
    });
    
    try {
        
        const saveUser = await user.save();
        return saveUser

    } catch (error) {
        throw error
    }

}

module.exports ={
    register,
}