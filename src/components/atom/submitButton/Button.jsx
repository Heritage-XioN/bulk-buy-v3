import React from 'react'
import "./button.css"

export default function Button(props) {
  const {value,disabled} = props
  return (
    <>
      <button className='button' type='submit' disabled={disabled}>{value}</button>
    </>
  )
}
