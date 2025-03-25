"use server"
const axios = require('axios');
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



async function handleSignup(data) {
    const cookieStore = await cookies()
    console.log(data)
    const url = process.env.SIGNUP_ENDPOINT;
    const formData = JSON.stringify(data)
    try {
        // Your API call here
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });
        const data = response.json()

        if (!response.ok) {
          const errorData = await response.json();
          return { error: errorData.message || 'Signup failed' };
        }
    
        // Success logic (redirect, etc.)
        cookieStore.set('name','heritage',{
            secure: true,
            httpOnly: true,
            sameSite: 'strict'
        })
        // redirect('/auth/otp')
    
    } catch (error) {
        console.error('Signup error:', error);
    }
}

async function handlelogin(data) {
    const url = process.env.LOGIN_ENDPOINT;
    const formData = JSON.stringify(data)
    axios.post(url, formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
}

export async function handleSubmit(formData) {
  try {
    // Your API call here
   
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Signup failed' };
    }

    // Success logic (redirect, etc.)
    return { success: true };

  } catch (error) {
    console.error('Signup error:', error);
    return { error: 'An unexpected error occurred.' };
  }
}

async function handleOtpSubmit(formData) {
    function concatOtpValues() {
        const input1 = formData.get('input1')
        const input2 = formData.get('input2')
        const input3 = formData.get('input3')
        const input4 = formData.get('input4')
        const value = input1+input2+input3+input4;
        return {otp: value};
    }
    const url = process.env.OTP_ENDPOINT;
    const otpData = JSON.stringify(concatOtpValues())
    axios.post(url, otpData, {
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error)
    })
}


export { handleSignup, handleOtpSubmit, handlelogin};