import React from 'react'
import "./button.css"

export default function button(props) {
  const {value} = props
  return (
    <>
        <button className='button' type='submit'>{value}</button>
    </>
  )
}
