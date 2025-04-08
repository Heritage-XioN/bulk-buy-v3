import Joi from 'joi';

export const signUpSchema = Joi.object({
  name: Joi.string().min(5).max(50).required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 5 characters',
      'string.max': 'Name must be less than 50 characters'
    }),
  
  email: Joi.string().email().required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email'
    }),
  password: Joi.string().min(8).required()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters',
      'string.pattern.base': 'Password must contain: 1 lowercase, 1 uppercase, 1 number, and 1 special character (!@#$%^&*)'
    }),
  
  confirmPassword: Joi.string().valid(Joi.ref('password')).required()
    .messages({
      'any.only': 'Passwords must match',
      'string.empty': 'Please confirm your password'
    })
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email'
    }),
    
  password: Joi.string().min(8).required()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters',
      'string.pattern.base': 'Password must contain: 1 lowercase, 1 uppercase, 1 number, and 1 special character (!@#$%^&*)'
    })
});