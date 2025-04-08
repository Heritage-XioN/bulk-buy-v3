'use server';
const axios = require('axios');
import { redirect } from "next/navigation";
import { signUpSchema, loginSchema } from '@/lib/validation';
import { getSession } from '@/lib/session'

export async function signup( previousState, formData ) {
  try {
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        passwordConfirm: formData.get('passwordConfirm')
      };
      
    const { error } = signUpSchema.validate(data, { abortEarly: false });

    if (error) {
      const errors = {};
      error.details.forEach((err) => {
        errors[err.path[0]] = err.message;
        });
      return { errors };
    }
    
    // Your API call here
    const url = process.env.SIGNUP_ENDPOINT;
    const value = JSON.stringify(data)
    const response = await axios.post(url, value,{
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.data.message;
      return { authError: errorData.message || 'Signup failed' };
    }

    // Success logic (redirect, etc.)
    const jwt = response.data.jwt;
    const id = response.data.user.id;
    const name = response.data.user.name;
    const email = response.data.user.email;
    const role = response.data.user.role;
    
    const session = await getSession( jwt, id, name, email, role, true)
    await session.save()
    redirect("/products")
    return { success: true };

  } catch (error) {
    console.error('Signup error:', error);
    return { authError: 'An unexpected error occurred.' };
  }
}

export async function login( previousState, formData ) {
  try {
    const data = {
        email: formData.get('email'),
        password: formData.get('password')
      };
      
    const { error } = loginSchema.validate(data, { abortEarly: false });

    if (error) {
      const errors = {};
      error.details.forEach((err) => {
        errors[err.path[0]] = err.message;
        });
      return { errors };
    }
    
    // Your API call here
    const url = process.env.LOGIN_ENDPOINT;
    const value = JSON.stringify(data)
    const response = await axios.post(url, value,{
      headers: {
        'content-type': 'application/json'
      }
    });
    
  if (!response.ok) {
    const errorData = await response.data.message;
    return { authError: errorData.message || 'Signup failed' };
  }
    

    // Success logic (redirect, etc.)
    const jwt = response.data.jwt;
    const id = response.data.user.id;
    const name = response.data.user.name;
    const email = response.data.user.email;
    const role = response.data.user.role;
    
    const session = await getSession( jwt, id, name, email, role, true )
    await session.save()
    redirect("/products")
    return { success: true };

  } catch (error) {
    console.error('Signup error:', error);
    return { authError: 'An unexpected error occurred.' };
  }
}

export async function handleOtpSubmit(formData) {
  function concatOtpValues() {
    const input1 = formData.get('input1')
    const input2 = formData.get('input2')
    const input3 = formData.get('input3')
    const input4 = formData.get('input4')
    const value = input1+input2+input3+input4;
    return {otp: value};
  }
}

