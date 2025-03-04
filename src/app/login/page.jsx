import React from 'react'
import Form from "@/components/molecules/loginForm/Form.jsx"
import "./login.css"
import Image from "next/image";


export default function Login() {
  return (
    <div className="container">
        <div className="sec-two">
        <Image src="/images/bulk-buy-people.jpg" fill={true} alt="sideframe"/>
        </div>
        <div className="sec-one">
            <div className="header">
                <h1>Login</h1>
            </div>
            <div className="header">
                <h4>Welcome back</h4>
            </div>
            <Form  />
        </div>
    </div>
  )
}
