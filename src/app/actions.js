"use server"
const axios = require('axios');




async function handleSignup(data) {
    const url = process.env.SIGNUP_ENDPOINT;
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