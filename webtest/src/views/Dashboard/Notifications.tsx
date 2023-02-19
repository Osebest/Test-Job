import React from 'react'
import timer from '../../assets/timer.png'
import frame from '../../assets/Frame 9384.png'
import notify from '../../assets/Notifications.png'

const Notifications = () => {
  return (
    <div>
      <div className='bg-[#F7F7F7] border shadow rounded-lg p-4 py-8 md:h-full mt-4 md:mt-0'>
        <div className='w-3/4 mx-auto py-10'>
          <div className='flex gap-2 text-red-600 bg-[#FEEBEE] rounded-full p-3 px-4 w-36 mb-10'>
            <i><img src={timer} alt="" /></i>
            <small>Coming soon</small>
          </div>
          <img src={frame} alt="" className='w-full'/>
          <div className='flex flex-col items-center mt-8'>
            <img src={notify} alt="" />
            <small className='text-center text-neutral-400 my-3 px-8 lg:px-4'>Receive notifcations about your rider performance, efficiency reviews and a lot more</small>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Notifications