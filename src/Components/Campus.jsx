import React from 'react'
import pic1 from '../assets/gallery-1.png'
import pic2 from '../assets/gallery-2.png'
import pic3 from '../assets/gallery-3.png'
import pic4 from '../assets/gallery-4.png'
import arrow from '../assets/white-arrow.png'

const Campus = () => {
  return (
    <div name="fourth" className='campus my-32 flex flex-col mx-auto text-center w-11/12'>
        <div className='flex flex-wrap justify-between align-middle mb-10'>
            <img className=' w-5/12 mb-4 md:w-1/5 rounded-xl' src={pic1} alt="" />
            <img className=' w-5/12 mb-4 md:w-1/5 rounded-xl' src={pic3} alt="" />
            <img className='w-5/12 mb-4 md:w-1/5 rounded-xl' src={pic2} alt="" />
            <img className='w-5/12 mb-4 md:w-1/5 rounded-xl' src={pic4} alt="" />
        </div>
        <button className='flex mb-14 p-2 w-2/12 mx-auto justify-center align-middle bg-blue-800 text-white rounded-full hover:bg-gray-400'>
            see more here <img className=" mt-1 ml-3 w-8" src={arrow} alt="" />
        </button>
        
    </div>
  )
}

export default Campus