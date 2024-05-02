import logo from "../assets/logo.png"
import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll"
import menu from "../assets/menu-icon.png"
import "./Navbar.css"

const Navbar = () => {
  let [stick, setStick] = useState(false);
  let [show, setShow] = useState(false);
  const toggle = ()=>{
    show? setShow(false):setShow(true)
  }
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 70 ? setStick(true) : setStick(false)
    })
  }, [])

  return (
    <nav className={"w-full space " + (stick ? 'bg-gray-600': 'bg-transparent')}>
        <h1 className="text-xl font-bold">Alleducation</h1>
        <ul className={"lg:flex " + (show ? " " : " hidden")} >
            <li><Link to='first' offset={0} smooth={true} duration={500} >Home</Link></li>
            <li><Link to='second' offset={-260} smooth={true} duration={500}>Progress</Link></li>
            <li><Link to='third' offset={-150} smooth={true} duration={500}>About us</Link></li>
            <li><Link to='fourth' offset={-260} smooth={true} duration={500}>Campus</Link></li>
            <li><Link to='fifth' offset={-260} smooth={true} duration={500}>Testimonials</Link></li>
            <li className=" lg:p-1 lg:bg-slate-50 text-black lg:rounded-full hover:bg-gray-400"><Link to='sixth' offset={-220} smooth={true} duration={500}>Contact us</Link></li>
        </ul>
        <img className=" block w-9 cursor-pointer lg:hidden" onClick={toggle} src={menu} alt="" />

        {/* <button className="p-2 bg-slate-50 text-black rounded-full hover:bg-gray-400">contact us</button> */}
    </nav>
  )
}
export default Navbar;