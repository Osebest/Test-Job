import React, { useState } from 'react'
import logo from '../../assets/Moneey App Icon 1.png'
import frame1 from '../../assets/Frame1.png'
import frame2 from '../../assets/Frame2.png'
import frame3 from '../../assets/Frame3.png'
import tick from '../../assets/tick-circle.png'
import Login from '../../components/Login'
import { Link } from 'react-router-dom'

interface Active {
  active: {
    frame1: boolean;
    frame2: boolean;
    frame3: boolean;
  }
}


const Home = () => {

  const [active, setActive] = useState<Active["active"]>({
    frame1: false,
    frame2: false,
    frame3: false
  })

  return (
    <div className='mx-auto gap-4 flex-row md:flex transition-all'>
      <div className='mb-16 p-8 pt-10 basis-2/4 lg:pl-20'>
        <Link to={"/"}>
          <img src={logo} alt="logo" className='pb-4' />
        </Link>
        <div>
          <h1 className='text-2xl font-semibold py-2 px-2'>Hi there, see what's new</h1>
          <p className='mb-10 px-2'>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</p>
          <div 
            onClick={() => setActive({ ...active, frame1: !active.frame1 })}
            className={`flex md:flex-col lg:flex-row items-start text-neutral-500 gap-4 my-6 px-2 rounded-2xl py-2 cursor-pointer hover:bg-[#F8F8F6] hover:text-black group ${active.frame1 ? "bg-[#F8F8F6] text-black" : ""}`}
          >
            <img src={frame1} alt="" />
            <div>
              <h2 className='text-lg font-medium'>Monitor your Earnings</h2>
              <p>Easily see how much your busineses are earning  on each transaction and watch your earnings rise. </p>
            </div>
            <img src={tick} alt="tick" className={`self-center pr-2 opacity-0 transition-all group-hover:opacity-100 ${active.frame1 ? "opacity-100" : ""}`} />
          </div>
          <div 
            onClick={() => setActive({ ...active, frame2: !active.frame2 })}
            className={`flex md:flex-col lg:flex-row items-start text-neutral-500 gap-4 my-6 px-2 rounded-2xl py-2 cursor-pointer hover:bg-[#F8F8F6] hover:text-black group ${active.frame2 ? "bg-[#F8F8F6] text-black" : ""}`}
          >
            <img src={frame2} alt="" />
            <div>
              <h2 className='text-lg font-medium'>Manage your Businesses</h2>
              <p>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
            </div>
            <img src={tick} alt="tick" className={`self-center pr-2 opacity-0 transition-all group-hover:opacity-100 ${active.frame2 ? "opacity-100" : ""}`} />
          </div>
          <div 
            onClick={() => setActive({ ...active, frame3: !active.frame3 })}
            className={`flex md:flex-col lg:flex-row items-start text-neutral-500 gap-4 my-6 px-2 rounded-2xl py-2 cursor-pointer hover:bg-[#F8F8F6] hover:text-black group ${active.frame3 ? "bg-[#F8F8F6] text-black" : ""}`}
          >
            <img src={frame3} alt="" />
            <div>
              <h2 className='text-lg font-medium'>Delegate to Staff</h2>
              <p>Easily see how much your businesses are earning  on each transaction and watch your earnings rise. </p>
            </div>
            <img src={tick} alt="tick" className={`self-center pr-2 opacity-0 transition-all group-hover:opacity-100 ${active.frame3 ? "opacity-100" : ""}`} />
          </div>
        </div>
      </div>
      <div className='basis-3/4'>
        <Login />
      </div>
    </div>
  )
}

export default Home