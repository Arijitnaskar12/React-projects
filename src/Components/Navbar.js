import React from 'react'

const Navbar = () => {
  return (
    <div className='Nav-container'>
    <img src="/images/brand_logo.jpg" alt="logo"/>
    <div className='links'>
    <a href='#'>MENU</a>
    <a href='#'>LOCATION</a>
    <a href='#'>ABOUT</a>
    <a href='#'>CONTACT</a>
    </div>
    
    <button >Login</button>
    </div>
  )
}

export default Navbar