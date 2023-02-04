import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div>
        <img src='src/assets/Rectangle 90.png' alt='profile photo' className='main-img'/>
        <h1 className='header-title'>Laura Smith</h1>
        <h2 className='header-subtitle'>Frontend Developer</h2>
        <p className='header-email'>laurasmith.website</p>
    </div>
  )
}

export default Header