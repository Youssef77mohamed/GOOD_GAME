import React from 'react'
import'./Navbar.css'
import logo from'../../images/logo/Untitled-1.png'

export default function Logo() {
  return (
    <div className='d-flex align-items-center'>
        <a className='img-nav' href='/'>
        <img className='img-nav' src={logo} alt='logo'/>
        </a>
        <h5 className='ms-3 fw-bold'> GOOD GAME </h5>
    </div>
  )
}
