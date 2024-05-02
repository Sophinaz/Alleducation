import React from 'react'
import { useState } from 'react'
import icon from "../../assets/msg-icon.png"
import mail from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"

const Contact = () => {
  const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "00789618-5965-4e7a-b118-c855032e5557");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };


  return (
    <div name="sixth" className='contact mt-16 w-full md:w-10/12 mx-auto md:flex md:flex-row flex-col justify-center md:justify-between align-middle'>
        <div className='mt-16 mx-auto mb-10 w-1/2'>
            <h3 className=' flex text-2xl text-blue-800 mb-4 font-bold'>send us a message<img className='md:w-8 hidden ml-4' src={icon} alt="" /></h3>
            <p className=' w-fit text-center md:w-1/2 text-sm'>
              We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. 
              Our team is here to assist you in any way we can.
              Feel free to contact us via email, phone, or through the contact form on our website. We look forward to connecting with you soon!
            </p>
            <ul className='mt-4 text-sm'>
                <li className='mt-5 flex justify-center space-x-3'><img className='md:w-7 w-4 h-8 md:mr-4' src={mail} alt="" /><h5>some@gmail.com</h5></li>
                <li className='mt-5 flex justify-center space-x-3'><img className='md:w-7 w-4 h-8 md:mr-4' src={phone} alt="" /><h5>+1 234 453 5435</h5></li>
                <li className='mt-5 flex justify-center space-x-3'><img className='md:w-7 w-4 h-8 md:mr-4' src={location} alt="" /><h5>masdasca, unitedsa</h5></li>
            </ul>
        </div>
        
        <div className='mt-16 mx-auto  mb-10 w-1/2'>
            <form className=' space-y-3' onSubmit={onSubmit}>
                <label className=' block' htmlFor=""> name</label>
                <input className='bg-blue-200 w-3/4 block' name='name' type="text" placeholder='enter your name'required />
                
                <label className=' block' htmlFor="name"> phone number:</label>
                <input className='bg-blue-200 w-3/4 block' type="tel" name="phone" placeholder="enter mobile:" required />
                
                <label className='  block' htmlFor="message">type your messages</label>
                <textarea className='bg-blue-200 w-3/4 block' name="message" rows="6" placeholder='write your message' required></textarea>
                
                <button className='p-2 ml-24 mt-7 bg-blue-800 text-black rounded-full hover:bg-gray-400'>submit now</button>
                <span>{result}</span>
            </form>

        </div>
    </div>
  )
}

export default Contact