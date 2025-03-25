"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import Button from "@/components/atom/submitButton/Button.jsx"
import { handlelogin } from "@/app/actions";
import "./form.css"

export default function Form() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  
  return (
      <form onSubmit={handleSubmit(handlelogin)} className='form'>
        <label className='label'>Email</label>
        <div className="input-cont">
          <input
            type="email"
            className="inputs"
            placeholder='example@gmail.com'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              aria-invalid={errors.email ? "true" : "false"}
              />
            { errors.email && <p className='errorMsg'>{errors.email?.message}</p>}
          </div>

        <Button value="Submit"/>
      </form>
  )
}
