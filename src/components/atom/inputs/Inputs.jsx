"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import "./inputs.css";

export default function Inputs(props) {
    const [input,setInput] = useState("");
    
    const {name,type,placeholder,label,pattern} = props;
    
  return (
    <>
     <label className='label' htmlFor="">
         {label}
        <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="inputs"
        value={input}
        pattern={pattern}
        required
        onChange={e => setInput(e.target.value)}
        />   
     </label>    
    </>
  )
}
