const Joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../database/model/User');

const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
});

const register = async(inUser)=>{
    const { error } = schemaRegister.validate(inUser);
    
    if(error){
        throw error.details[0].message; 
    } 
    //
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(inUser.password,salt); 

    const user = new User({
        name: inUser.name,
        email: inUser.email,
        password: password
    });
    
    try {
        const isEmailExist = await User.findOne({email: inUser.email});
        if(isEmailExist){
            throw 'Email exits in db';
        }
        
        const saveUser = await user.save();
        return saveUser

    } catch (error) {
        throw error
    }

}

const login = async(inUser) =>{
    try {
        
        const { error } = schemaLogin.validate(inUser);
        if(error){
            throw error.details[0].message; 
        }
        //
        const user = await User.findOne({email: inUser.email});
        if(!user){
            throw 'User no exits';        
        }
        
        //
        const validPassword = await bcrypt.compare(inUser.password, user.password);
        if(!validPassword){
            throw 'Password is incorrect';
        }
    
        //create token
        const token = jwt.sign({
            exp:Math.floor(Date.now()/1000) + (60 * 60),
            data:{
                name: user.name,
                id:user._id
            }
        },process.env.TOKEN_SECRET)
    
        return token
        
    } catch (error) {
        throw error;
    }

}

module.exports ={
    register,
    login
}