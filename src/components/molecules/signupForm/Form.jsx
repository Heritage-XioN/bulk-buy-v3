"use client"
import React from 'react'
import data from './signupFormData'
import Inputs from "@/components/atom/inputs/Inputs.jsx"
import Button from "@/components/atom/submitButton/Button.jsx"
import { handleSignup } from "@/app/actions";
import { useActionState } from "react";
import "./form.css"


const initialState = {
  message: '',
}

export default function Form() {
  
  const [state,formAction,pending] = useActionState(handleSignup, initialState)
  console.log(state,pending,handleSignup)

  return (
      <form action={handleSignup}  className='form'>
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
        <p aria-live='polite'>{state?.message}</p>
        <Button value="Signup" diabled={pending}/>
      </form>
  )
}
