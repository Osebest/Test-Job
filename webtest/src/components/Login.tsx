import React, { useState, useContext } from 'react'
import eye from '../assets/eye.png'
import { UserContext } from '../Context/UserContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const nav = useNavigate()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { user, setUser } = useContext(UserContext)


  const show = (): void => {
    setShowPassword(!showPassword)
  }

  const onSubmit = (e:any): void => {
    e.preventDefault()
    nav('/dashboard')
  }

  return (
    <div className='bg-[#FEF0F2] py-16 px-8 flex justify-center items-center h-full'>
      <div className='bg-white p-10 px-12 shadow-lg shadow-[#66666633] rounded-lg lg:w-3/4'>
        <h1 className='text-xl font-semibold'>Login to your dashboard</h1>
        <p className='text-neutral-500 mb-6'>Provide details to login to your account </p>
        <form onSubmit={onSubmit} className='flex flex-col'>
          <label htmlFor="email" className='mb-2'>Email</label>
          <input 
            value={user.email} type="email" 
            onChange={(e) => {setUser({...user, email: e.target.value})}}
            name="email" className='mb-8 py-2 px-2 rounded-md ring-4 ring-[#F0F0F0] border border-[#1A1A1A] focus:ring-indigo-200 focus:outline-0'
          />
          <label htmlFor="password" className='mb-2'>Password</label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              value={user.password}
              onChange={(e) => {setUser({...user, password: e.target.value})}}
              type={!showPassword ? "password" : "text"} name="password"
              className="block w-full rounded-md pl-2 pr-12 py-2 px-2 ring-4 ring-[#F0F0F0] border border-[#1A1A1A] focus:ring-indigo-200 focus:outline-0"
            />
            <div className="absolute inset-y-0 right-0 flex items-center cursor-pointer" onClick={show}>
              <img src={eye} alt="eye" className='w-2/4' />
            </div>
          </div>
          <button className='bg-[#1CC578] text-white py-3 px-4 rounded-full mt-10 hover:bg-[#17a867]'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login