import React, { useState } from 'react'
import '../Components/Nav.css'
import { FaBars, FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


export default function Nav() {

  let [ismenu, setismenu] = useState(false);

  const togglemenu = () => {
    setismenu(!ismenu);
  }

  const nav_items = [
    { path: '/', link: "Home" },
    { path: '/blogs', link: "Blogs" },
    { path: '/services', link: "Services" },
    { path: '/about', link: "About" },
    { path: '/contact', link: "Contact" }
  ]

  return (
    <>
    <header>
      {/* Nav_Bar */}
      <nav className='bg-[black] text-white  fixed top-0 left-0 right-0 w-full max-w-7xl mx-auto flex justify-between items-center p-4 z-10'>
        <a href='/' className=' cursor-pointer text-sm'>Daud's<span className=' text-xl text-mycolor font-extrabold'> Blogs</span></a>
        <ul className='md:flex gap-12 text-lg hidden items-center'>

          {nav_items.map((items, i) => {
            return (
              <li className='font-bold hover:text-mycolor' key={i}>
                <NavLink to={items.path}>{items.link}</NavLink>
              </li>
            )
          })}
        </ul>
        <div className=' lg:flex justify-center gap-4 items-center hidden'>

          <a href='https:facebook.com' className=' text-mycolor mx-3 cursor-pointer'><FaFacebookSquare className=' w-6 h-6' /></a>
          <a href='https:gmail.com' className=' text-mycolor mx-3 cursor-pointer'><FaGoogle className=' w-6 h-6' /></a>
          <a href='https:twitter.com' className=' text-mycolor mx-3 cursor-pointer'><FaTwitter className=' w-6 h-6' /></a>
          {/* <button onClick={()=>Setnavstatus(prev=>!prev)} className='text-mycolor mx-3 px-[18px] border border-mycolor border-solid rounded-lg py-[4px] ml-8 relative font-bold hover:bg-mycolor hover:text-black outline-none'>Login</button> */}
          
        </div>
        <div className='md:hidden'>
          <button className=' text-mycolor mx-3' onClick={togglemenu}>
            {ismenu ? <FaXmark className=' w-8 h-8 ' /> : <FaBars className=' w-8 h-8 ' />}

          </button>

        </div>

      </nav>

      {/* Responsive Menu */}




      <div className={`w-[100%] h-[100vh] bg-black flex items-center list-none flex-col text-white fixed top-16 text-3xl 
      ${ismenu ? 'show_div' : 'res_div'
        }`}>
        {nav_items.map((items, i) => {
          return (
            <li className='font-bold hover:text-mycolor p-7' key={i}>
              <NavLink onClick={togglemenu} to={items.path}>{items.link}</NavLink>
            </li>
          )
        })}

      </div>



    </header>
    </>
  )
}
