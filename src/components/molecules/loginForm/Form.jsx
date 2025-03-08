"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import Link from 'next/link'
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

          <label className='label'>Password</label>
        <div className="input-cont">
          <input
            type="password"
            className="inputs"
            placeholder='passwrd123....'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'password must be at least 8 characters',
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
            />
          { errors.password && <p className='errorMsg'>{errors.password?.message}</p>}
        </div>
          
        <p className="forgot-password">
        <Link href='/signup' >
          forgot password
        </Link>
        </p>
        <Button value="Login"/>
      </form>
  )
}
