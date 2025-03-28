import React from 'react'
import Link from 'next/link'
import Form from "@/components/molecules/otpForm/Form.jsx"
import "./otp.css"
import Image from "next/image";


export default function Otp() {
  return (
    <div className="container">
        <div className="sec-two">
        <Image src="/images/bulk-buy-people.jpg" fill={true} style={{objectFit: "cover"}} alt="sideframe"/>
        </div>
        <div className="sec-one">
          <h1>OTP</h1>
          <h4>Please enter the otp we sent your registered email address</h4>
          <Form />
          <p
          >Did not recieve an otp?
          <Link href='/login' className='link'>
            Resend
          </Link>
          </p>
        </div>
    </div>
  )
}
