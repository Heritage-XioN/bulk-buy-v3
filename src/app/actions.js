"use server"
const axios = require('axios');
const Joi = require('joi');

const schema = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

   email: Joi.string()  
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .min(8)
        .required(),

    confirmPassword: Joi.string()
        .required()
        .valid(Joi.ref('password'))
   
})

async function handleSignup(formData, callback) {
    
    const userData = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmpassword')
    }
    const validatedFields = schema.validate(userData)
    console.log(userData)
    //console.log(validatedFields.error)

    if (validatedFields.error) {
      const errorMessage = validatedFields.error.details[0].message;
      callback(errorMessage)
    }else{
      console.log("form data is valid")
    } 
}



export {handleSignup};