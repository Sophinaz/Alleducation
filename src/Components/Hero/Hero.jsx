import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className='hero space' name='her'>
        <div className='text-center max-w-full'>
            <h1 className=' text-5xl font-bold'>Let's give our world the education that it needs!!</h1>
            <p className=' text-md font-semibold mx-auto mt-3 mb-4'>"The function of education is to teach one to think intensively and to think critically. 
                Intelligence plus character - that is the goal of true education." - Martin Luther King Jr.</p>
            <button className='p-2 bg-slate-50 text-black rounded-full hover:bg-gray-400'>explore more</button>
        </div>
    </div>
  )
}

export default Hero