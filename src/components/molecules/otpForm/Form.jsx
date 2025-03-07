"use client"
import React from 'react'
import data from './signupFormData'
import OTPInputGroup from "@/components/atom/otpInputs/Inputs.jsx"
import Button from "@/components/atom/submitButton/Button.jsx"
import "./form.css"
import { handleSignup } from "@/app/actions";


export default function Form() {
  


  return (
      <form action={handleSignup}  className='form'>
        <div className="input-fields">
          <div className="input-container">
            <OTPInputGroup />
          </div>
        </div>
        <Button value="Submit"/>
      </form>
  )
}
