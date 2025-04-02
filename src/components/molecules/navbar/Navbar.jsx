import React from 'react'
import './navbar.css'
import Image from 'next/image'

const NavBar = () => {
  return (
    <nav>
        <div className='logo'>
          <a><Image src= {"/images/logo.png"}  width={150} height={50} alt='logo' /></a>
        </div>
        <ul className='nav-content'>
          <li><a href="#"><Image src={'/images/cart.png'} width={30} height={30} alt='cart' /></a></li>
          <li><a href="#"><Image src={'/images/bell 1.png'} width={30} height={30} alt='notifications' /></a></li>
          <li><a href="#"><Image src={'/images/profile.png'} width={30} height={30} alt='profile' /></a></li>
        </ul>
    </nav>
  )
}

export default NavBar