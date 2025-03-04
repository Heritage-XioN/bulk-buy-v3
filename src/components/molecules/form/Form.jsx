import React from 'react'
import data from './signupFormData'
import Inputs from "@/components/atom/inputs/Inputs.jsx"

export default function Form() {
   const value = data.map((item) => {
        <Inputs 
        name={item.name}
            id={item.name}
        />
    })
    console.log(value)
  return (
    <>
    
    </>
  )
}
