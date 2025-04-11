"use server"
import 'server-only'
const axios = require('axios');
import { getSession } from '@/lib/session';
import { redirect } from "next/navigation";



async function handleSignup(data) {
    try {
        const url = process.env.SIGNUP_ENDPOINT;
        const formData = JSON.stringify(data)
    
        //API call 
        const response = await axios.post(url, formData,{
            headers: {
                'content-type': 'application/json'
            }
        });
    
        //checks if theres an error in the request
        if (response.data.status === 'error') {
            return {message: response.data.message}
        }
    
        //create session upon successful authentication
        const resData = response.data
        const session = await getSession()
        session.jwt = response.data.jwt;
        session.id = resData.data.user._id;
        session.name = resData.data.user.name;
        session.email = resData.data.user.email;
        session.role = resData.data.user.role;
        session.isLoggedIn = true;
        await session.save()
    
        
        
       } catch (error) {
        console.error('signup error:', error);
       }
       //redirects to appropriate page
       redirect('/product-listing')
}

async function handlelogin(data) {
   try {
    const url = process.env.LOGIN_ENDPOINT;
    const formData = JSON.stringify(data)

    //API call 
    const response = await axios.post(url, formData,{
        headers: {
            'content-type': 'application/json'
        }
    });

    //checks if theres an error in the request
    if (response.data.status === 'error') {
        return {message: response.data.message}
        console.log({message: response.data.message})
    }

    //create session upon successful authentication
    const resData = response.data
    const session = await getSession()
    session.jwt = response.data.jwt;
    session.id = resData.data.user._id;
    session.name = resData.data.user.name;
    session.email = resData.data.user.email;
    session.role = resData.data.user.role;
    session.isLoggedIn = true;
    await session.save()

    //redirects to appropriate page
   //
   //  redirect('product_listing')
    
   } catch (error) {
    console.error('login error:', error);
   }
   //redirects to appropriate page
   redirect('/product_listing')
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
}


export { handleSignup, handleOtpSubmit, handlelogin};