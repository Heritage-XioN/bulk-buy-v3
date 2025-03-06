import React from 'react'
import Link from 'next/link'
import data from './signupFormData'
import Inputs from "@/components/atom/inputs/Inputs.jsx"
import Button from "@/components/atom/submitButton/Button.jsx"
import "./form.css"

export default function Form() {
  
  return (
      <form action="" className='form'>
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
        <p className="forgot-password">
        <Link href='/signup' >
          forgot password
        </Link>
        </p>
        <Button value="Login"/>
      </form>
  )
}
