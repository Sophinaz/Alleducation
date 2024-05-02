import React from 'react'
import program_1 from "../../assets/program-1.png"
import program_2 from "../../assets/program-2.png"
import program_3 from "../../assets/program-3.png"
import program1 from "../../assets/program-icon-1.png"
import program2 from "../../assets/program-icon-2.png"
import program3 from "../../assets/program-icon-3.png"
const Program = () => {
  return (
    <div className='w-11/12 flex flex-col justify-center space-y-7 md:space-y-0 md:flex-row md:justify-between space-x-5 my-24 mx-auto align-middle' name='second'>
        <div className='md:w-1/3 relative cursor-pointer'>
            <img className=' w-full rounded-3xl' src={program_1} alt="" />
            <div className=' absolute top-0 left-0'>
                <img className=" max-h-24 md:max-h-14 md:max-w-14" src={program1} alt="" />
            </div>
        </div>
        
        <div className='md:w-1/3 relative cursor-pointer'>
            <img className=' w-full rounded-3xl' src={program_2} alt="" />
            <div className=' absolute top-0 left-0'>
                <img className=" md:max-h-14 w-24 md:max-w-14" src={program2} alt="" />
            </div>
        </div>
        
        <div  className='md:w-1/3 relative cursor-pointer'> 
            <img className=' w-full rounded-3xl' src={program_3} alt="" />
            <div className=' absolute top-0 left-0'>
                <img className=" md:max-h-14 w-24 md:max-w-14" src={program3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Program