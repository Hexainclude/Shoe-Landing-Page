import React from 'react'
import logo from '../assets/images/brand_logo.svg'
import '../App.css'

export const Header = () => {
  return (
    <header className='header flex fx-between'>
        <img src={logo} /> 
        <nav className='flex fx-around'> 
            <ul className='flex'>
                <li><a href=''>MENU</a></li>
                <li><a href=''>LOCATION</a></li>
                <li><a href=''>ABOUT</a></li>
                <li><a href=''>CONTACT</a></li>
            </ul>
        </nav>
        <button>Login</button>
    </header>
  )
}
