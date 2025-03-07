'use client'
import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import data from './signupFormData'
import Inputs from "@/components/atom/inputs/Inputs.jsx"
import Button from "@/components/atom/submitButton/Button.jsx"
import { handleSignup } from "@/app/actions";
import "./form.css"



export default function Form() {
  
  const handleFormSubmit = async (errorMessage) => {
    toast.error(errorMessage)
  }

  const OnSubmit =  () => {
    e.preventDefault()
    const formData = new FormData(e.target)
    handleSignup(formData, handleFormSubmit)
  }
  return (
      <form onSubmit={OnSubmit}  className='form'>
        <ToastContainer />
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
      
        <Button value="Signup" />
      </form>
  )
}
