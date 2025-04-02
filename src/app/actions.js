"use server"
const axios = require('axios');
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



async function handleSignup(data) {
    const cookieStore = await cookies()
    const url = process.env.SIGNUP_ENDPOINT;
    const formData = JSON.stringify(data)
    axios.post(url, formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res) => {
        const response = res.data;
        const authData = {
            token: response.token,
            name: response.data.user.name,
            id: response.data.user._id
        }
        console.log(authData)
        const cookieValue = JSON.stringify(authData)
        console.log(cookieValue)
        cookieStore.set('user', cookieValue, {
            secure: process.env.COOKIE_SECURE,
            httpOnly: process.env.COOKIE_HTTP_ONLY,
            sameSite: process.env.COOKIE_SAME_SITE,
            maxAge: process.env.COOKIE_MAX_AGE
        })

        //use to navigate to the next page after succesful authentication and saving of cookie data
        redirect('/')
    })
    .catch((error) => {
        console.log(error)
    })
}

async function handlelogin(data) {
    const cookieStore = await cookies()
    const url = process.env.LOGIN_ENDPOINT;
    const formData = JSON.stringify(data)
    axios.post(url, formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res) => {
        const response = res.data;
        const authData = {
            token: response.token,
            name: response.data.user.name,
            id: response.data.user._id
        }
        console.log(authData)
        const cookieValue = JSON.stringify(authData)
        cookieStore.set('user', cookieValue, {
            secure: process.env.COOKIE_SECURE,
            httpOnly: process.env.COOKIE_HTTP_ONLY,
            sameSite: process.env.COOKIE_SAME_SITE,
            maxAge: process.env.COOKIE_MAX_AGE
        })
    })
    .catch((error) => {
        console.log(error)
    })
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