import React from 'react'
import data from './signupFormData'
import Inputs from "@/components/atom/otpInputs/Inputs.jsx"
import Button from "@/components/atom/submitButton/Button.jsx"
import "./form.css"
import { handleSignup } from "@/app/actions";
// const inputs = document.querySelector(".input-container");


export default function Form() {
  
// inputs.addEventListener("input", (e) => {
//   const target = e.target;
//   const val = target.value;
  
//   /*
//   if value entered is NOT A NUMBER
//   this assign am empty string to the
//   input
//   */
//   if (isNaN(val)) {
//     target.value = "";
//     return;
//     }
    
//   /*
//   handles changing focud to the next.
//   input field if the value of the current
//   input field is not an empty string
//   */
//   if (val != "") {
//     const next = target.nextElementSibling;
//     if (next) {
//       next.focus();
//     }
//   }
// })

// inputs.addEventListener("keyup", (e) => {
//   const target = e.target;
//   const key = e.key.toLowerCase();

//   /*
//   Handles deleting the value of the
//   current input field and changing focus
//   to the prev input field
//   */
//   if (key == "backspace" || key == "delete") {
//     target.value = "";
//     const prev = target.previousElementSibling;
//     if (prev) {
//       prev.focus();
//     }
//     return;
//   }
// })



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
