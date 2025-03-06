"use client"
import React, { useState } from 'react'
import "./inputs.css";

export default function Inputs(props) {
    const [input,setInput] = useState("");
    const {name,type,placeholder,label,id} = props;
    
  return (
    <>
     <label className='label' htmlFor="">
         {label}
        <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="inputs"
        value={input}
        onChange={e => setInput(e.target.value)}
        />   
     </label>    
    </>
  )
}
