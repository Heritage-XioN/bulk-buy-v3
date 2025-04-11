'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import Button from "@/components/atom/submitButton/Button.jsx"
import { handleSignup } from "@/actions/auth";
import "./form.css"



export default function Form() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  
  const validateConfirmPassword = (value, data) => {
    if (value !== data.password) {
      return "Password do not march"
    }
  }
  
  return (
      <form onSubmit={handleSubmit(handleSignup)}  className='form'>
        <label className='label'>Name</label>
        <div className="input-cont">
          <input
            type="text"
            className="inputs"
            placeholder='John'
            {...register('name', {
              required: 'First name is required',
              minLength: {
                value: 2,
                message: 'First name must be at least 2 characters',
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
            />
          { errors.name && <p className='errorMsg'>{errors.name?.message}</p>}
        </div>

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
        
        <label className='label'>Confirm Password</label>
        <div className="input-cont">
          <input
            type="password"
            className="inputs"
            placeholder='password123...'
            {...register('passwordConfirm', {
              required: 'confirm password is required',
              minLength: {
                value: 8,
                message: 'password must be at least 8 characters',
              },
              validate: validateConfirmPassword,
            })}
            aria-invalid={errors.passwordConfirm ? "true" : "false"}
            />
          { errors.passwordConfirm && <p className='errorMsg'>{errors.passwordConfirm?.message}</p>}
        </div>
        
        <Button value="Signup" />
      </form>
  )
}
