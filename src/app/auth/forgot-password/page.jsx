import React from 'react'
import Form from "@/components/molecules/forgotPasswordForm/Form.jsx"
import "./forgot.css"
import Link from 'next/link'
import Image from "next/image";


export default function ForgotPassword() {
  return (
    <div className="container">
        <div className="sec-two">
        <Image src="/images/bulk-buy-people.jpg" fill={true} style={{objectFit: "cover"}} alt="sideframe"/>
        </div>
        <div className="sec-one">
            <h1>Forgot Password</h1>
            <h4>A password reset link will be sent to your email address</h4>
            <Form  />

            <p> 
            Remembered your password? 
            <Link href='/auth/login' className='link'>
              Login
            </Link>
            </p>
        </div>
    </div>
  )
}
