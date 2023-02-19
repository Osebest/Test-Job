import React from 'react'
import logo from '../assets/Moneey App Icon 1.png'

const Header = () => {
  return (
    <div className='flex items-center px-4 md:px-12 h-24 border-2 mb-4'>
      <img src={logo} alt=""/>
    </div>
  )
}

export default Header