import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer'
import Videoplayer from './Components/Videoplayer'
const App = () => {
  const [play, setPlay] = useState(false)
  console.log(play)
  return (
    <>
      <Navbar />
      <Hero />
      <div className='space'>
        <Title title="what we offer" subtitle="our programs"/>
        <Program />
        <About setPlay={setPlay}/>
        <Title title={"campus photos"} subtitle={"Gallery"}/>
        <Campus />
        <Title title="what a student says" subtitle="Testimonials"/>
        <Testimonials />
        <Title title={"Get in touch"} subtitle={"CONTACT US"}/>
        <Contact />
        <Footer />
      </div>
      <Videoplayer play={play} setPlay={setPlay}/>
    </>
  )
}

export default App