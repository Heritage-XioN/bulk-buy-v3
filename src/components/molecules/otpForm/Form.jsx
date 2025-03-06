import React from 'react'
import data from './signupFormData'
import Inputs from "@/components/atom/otpInputs/Inputs.jsx"
import Button from "@/components/atom/submitButton/Button.jsx"
import "./form.css"
import { handleSignup } from "@/app/actions";


export default function Form() {
  
  return (
      <form action={handleSignup}  className='form'>
        <div className="input-fields">
          <div className="input-container">
            <Inputs 
            type="text"
            id="otp1" 
            inputmode="numeric" 
            maxlength="1" 
            required
            />

            <Inputs 
            type="text"
            id="otp2" 
            inputmode="numeric" 
            maxlength="1" 
            required
            />

            <Inputs 
            type="text"
            id="otp3" 
            inputmode="numeric" 
            maxlength="1" 
            required
            />

            <Inputs 
            type="text"
            id="otp4" 
            inputmode="numeric" 
            maxlength="1" 
            required
            />
          </div>
        </div>
        <Button value="Submit"/>
      </form>
  )
}
