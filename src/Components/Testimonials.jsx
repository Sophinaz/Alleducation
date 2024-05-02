import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next from '../assets/next-icon.png'
import back from '../assets/back-icon.png'
import pic1 from '../assets/user-1.png'
import pic2 from '../assets/user-2.png'
import pic3 from '../assets/user-3.png'
import pic4 from '../assets/user-4.png'

const Testimonials = () => {
    const count = useRef();
    let tx = 0
    const forward = ()=>{
        if (tx > -50){
            tx -= 25
        }
        count.current.style.transform = `translateX(${tx}%)`
    }
    const backward = ()=>{
        if (tx < 0){
            tx += 25
        }
        count.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div name="fifth" className='testimonials relative my-24 px-5 mx-auto'>
        <img className=' bg-blue-800 absolute top-1/2 -left-10 -translate-y-1/2 rounded-full w-10 p-2' src={back} alt="" onClick={forward} />
        <img className=' bg-blue-800 absolute top-1/2 -right-10 -translate-y-1/2 rounded-full w-10 p-2' src={next} alt="" onClick={backward}/>
        
        <div className='overflow-hidden'>
            <ul ref={count} className='widt overflow-x-hidden duration-1000 space-x-4 px-8 pb-4 flex '>
                <li className='border-2 shadow-lg shadow-black rounded-3xl  wid p-20'>
                    <div className='flex my-8 '>
                        <img className='w-16 border-blue-800 border-4 rounded-full mr-5' src={pic1} alt="" />
                        <div className='mt-2 font-bold'>
                            <h3 className=' text-blue-800'>John Doe</h3>
                            <span>LosAngeles, USA</span>                
                        </div>
                    </div>
                    <p className='md:text-xl text-sm'>
                    "As a graduate of Alleducation, I can attest to the unparalleled blend of innovation and collaboration 
                    that defines this renowned institution. From its cutting-edge research labs to its entrepreneurial spirit, Alleducation empowers students to tackle the world's most pressing challenges with creativity and ingenuity." 
                    </p>
                </li>
                <li className='border-2 shadow-lg shadow-black rounded-3xl   wid p-20'>
                <   div className='flex my-8 '>
                        <img className='w-16 border-blue-800 border-4 rounded-full mr-5' src={pic2} alt="" />
                        <div className='mt-2 font-bold'>
                            <h3 className=' text-blue-800'>John Doe</h3>
                            <span>LosAngeles, USA</span>                
                        </div>
                    </div>
                    <p className='md:text-xl text-sm'>
                    "As an alumnus of Alleducation University, I can attest to the timeless allure and academic rigor 
                    that define this prestigious institution. With its centuries-old tradition of scholarly excellence, Alleducation fosters a dynamic intellectual environment where ideas are exchanged, challenged, and refined." 
                    </p>
                </li>
                <li className='border-2 shadow-lg shadow-black rounded-3xl   wid p-20'>
                    <div className='flex my-8 '>
                        <img className='w-16 border-blue-800 border-4 rounded-full mr-5' src={pic3} alt="" />
                        <div className='mt-2 font-bold'>
                            <h3 className=' text-blue-800'>John Doe</h3>
                            <span>LosAngeles, USA</span>                
                        </div>
                    </div>
                    <p className='md:text-xl text-sm'>"As a graduate of Alleducation University, I can confidently say that it's more than just a campus—it's a community of innovation 
                        and excellence. From its world-class faculty to its cutting-edge research facilities."</p>
                </li>
                <li className='border-2 shadow-lg shadow-black rounded-3xl   wid p-20'>
                    <div className='flex my-8 '>
                        <img className='w-16 border-blue-800 border-4 rounded-full mr-5' src={pic4} alt="" />
                        <div className='mt-2 font-bold'>
                            <h3 className=' text-blue-800'>John Doe</h3>
                            <span>LosAngeles, USA</span>                
                        </div>
                    </div>
                    <p className='md:text-xl text-sm'>As a proud alumna of Alleduction University, I can attest to the unparalleled excellence and transformative impact of this esteemed institution. 
                        Alleduction's commitment to academic rigor, innovation, and diversity </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials