"use client"
import React from 'react'
import OTPInputGroup from "@/components/atom/otpInputs/Inputs.jsx"
import Button from "@/components/atom/submitButton/Button.jsx"
import "./form.css"
import { handleOtpSubmit } from "@/actions/auth.js";


export default function Form() {
  
  return (
      <form  action={handleOtpSubmit} className='form'>
        <div className="input-fields">
          <div className="input-container">
            <OTPInputGroup />
          </div>
        </div>
        <Button value="Submit"/>
      </form>
  )
}
