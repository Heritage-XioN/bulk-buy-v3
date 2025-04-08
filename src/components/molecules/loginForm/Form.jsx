"use client"
import React from 'react'
import Link from 'next/link'
import Inputs from "@/components/atom/inputs/Inputs.jsx"
import Button from "@/components/atom/submitButton/Button.jsx"
import { login } from '@/actioms/auth.js'
import { useActionState } from 'react';
import "./form.css"

export default function Form() {
  const [state, formAction, isPending] = useActionState(login, undefined);
  
  return (
    <div className="container">
      {state.success && <div className="success-msg-cont"><p className="auth-successMsg">Signup successful!</p></div>}
      {state.authError && <div className="error-msg-cont"><p className="auth-errorMsg">{state.authError}</p></div>}

      <form action={formAction} className="form">
        <div className="input-cont">
          <Inputs label="email" type="email" name="email" placeholder="example@gmail.com" />
          {state.errors?.email && <p className="errorMsg">{state.errors.email}</p>}
        </div>

        <div className="input-cont">
          <Inputs label="password" type="password" name="password" />
          {state.errors?.password && <p className="errorMsg">{state.errors.password}</p>}
        </div>
        
        <p className="forgot-password">
          <Link href='/auth/forgot-password' >
          forgot password
          </Link>
        </p>

        <Button disabled={isPending} value={isPending ? 'Logging in...' : 'Login'} />
      </form>
    </div>
  );
}
