import React from 'react'
import data from './signupFormData'
import Inputs from "@/components/atom/inputs/Inputs.jsx"
import Button from "@/components/atom/signupButton/Button.jsx"
import "./form.css"

export default function Form() {
  
  return (
      <form action="" className='form'>
        <Inputs 
        label="First Name"
        name="firstName"
        type="text"
        placeholder="First Name"
        />
        
        <Inputs 
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Last Name"
        />

        <Inputs 
        label="Email"
        name="email"
        type="email"
        placeholder="example@gmail.com"
        />

        <Inputs 
        label="Password"
        name="password"
        type="password"
        placeholder="passwrd1234...."
        />

        <Inputs 
        label="Confirm Password"
        name="confirmpassword"
        type="password"
        placeholder="passwrd1234...."
        />

        <Button value="Signup"/>
      </form>
  )
}
