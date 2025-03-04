import React from 'react'
import Form from "@/components/molecules/form/Form.jsx"
import "./signup.css"

export default function Signup() {
  return (
    <div className="container">
        <div className="sec-one">
            <div className="header">
                <h1>signup</h1>
            </div>
            <div className="header">
                <h4>Welcome to thr smart shopping platform</h4>
            </div>
            <Form  />
        </div>
    </div>
  )
}
