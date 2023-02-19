import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Moneey App Icon 1.png'

const Header = () => {
  return (
    <div className='flex items-center px-4 md:px-12 h-24 border-2 mb-4'>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
    </div>
  )
}

export default Header