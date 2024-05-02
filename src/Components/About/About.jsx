import React from 'react'
import about1 from '../../assets/about.png'
import about2 from '../../assets/play-icon.png'
import Title from '../Title/Title'

const About = ({setPlay}) => {
  return (
    <div name="third" className=' flex  justify-between align-middle my-36 mx-auto '>
        <div className=' basis-2/5 w-10/12 relative'>
            <img className=' rounded-xl w-full' src={about1} alt="" />
            <img onClick={()=>{setPlay(true)}} className=" w-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" src={about2} alt="" />
        </div>
        <div className=' basis-1/2'>
            <Title title="Nurturing tomorrow's leaders today " subtitle="About University"/>
            <p className=' text-sm  mb-5 font-medium'>Education is the cornerstone of progress, shaping individuals and societies alike. It transcends the mere transmission of knowledge; 
                it cultivates critical thinking, fosters creativity, and instills values essential for navigating life's complexities. At its core, education empowers 
                individuals to reach their full potential, equipping them with the tools to contribute meaningfully to their communities and beyond.</p>
            <p className='text-sm  mb-5 font-medium'>
            From early childhood through adulthood, education unfolds as a lifelong journey of discovery. It 
            begins with foundational learning experiences that lay the groundwork for future academic and personal growth. In these formative years, 
            educators play a pivotal role, not only imparting knowledge but also igniting curiosity and sparking a love for learning that can last a lifetime.
            </p>
            <p className='text-sm  mb-5 font-medium'>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</p>
        </div>
    </div>
  )
}

export default About