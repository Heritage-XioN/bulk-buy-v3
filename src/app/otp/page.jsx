import React from 'react'
import Form from "@/components/molecules/otpForm/Form.jsx"
import "./otp.css"
import Image from "next/image";


export default function Signup() {
  return (
    <div className="container">
        <div className="sec-two">
        <Image src="/images/bulk-buy-people.jpg" fill={true} style={{objectFit: "cover"}} alt="sideframe"/>
        </div>
        <div className="sec-one">
          <h1>OTP</h1>
          <h4>Please enter the otp we sent your registered email address</h4>
          <Form />
          <p>Did not recieve an otp?</p>
        </div>
    </div>
  )
}
