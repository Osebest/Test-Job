import React from 'react'
import Header from '../../components/Header'
import logo from '../../assets/Default Avartar.png'
import Notifications from './Notifications'
import { useNavigate } from 'react-router-dom'
import CompanyQuery from '../../GraphQL/companyQuery'

const Dashboard = () => {
  let company:any;
  const nav = useNavigate()
  const { data, loading, error } = CompanyQuery()

  if (loading) return <div className='m-8'>Loading...</div>
  if (error) return <div className='m-8'>Error...</div>
  if (data) {company = data.company}
  

  setTimeout(() => {
    nav('/')
  }, 120000)

  return (
    <div className='transition-all'>
      <Header />
      <div className='m-2 mb-10 mx-6 grid-cols-3 gap-8 md:grid md:h-screen md:mb-20 md:px-8'>
        <div className='col-span-2 border shadow rounded-lg p-4 py-6 pt-10 md:h-full'>
          <div className='w-3/4 mx-auto pb-10'>
            <div className='flex items-center gap-5 mb-10'>
              <img src={logo} alt="" />
              <h1 className='text-xl font-semibold'>{company.name}</h1>
            </div>
            <div className='mb-4'>
              <small className='text-neutral-400'>CEO</small>
              <h1 className='font-medium text-neutral-700'>{company.ceo}</h1>
            </div>
            <div>
            <small className='text-neutral-400'>CTO</small>
              <h1 className='font-medium text-neutral-700'>{company.cto}</h1>
            </div>
          </div>
        </div>
        <Notifications/>
      </div>
    </div>
  )
}

export default Dashboard