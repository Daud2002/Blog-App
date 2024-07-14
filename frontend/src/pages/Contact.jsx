import React, { useEffect, useState } from 'react'
import { FaFacebookSquare, FaGoogle, FaTwitter } from "react-icons/fa";

export default function Contact() {

  const [formData, setformData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setformData(prevState => ({
      ...prevState,
      [name]: value
    }))
    console.log(formData)
  }
  const handleSubmit = () => {
    e.preventDefault();

  }

  return (
    <>
      <div className=' py-40 bg-black text-white text-center'>
        <h1 className=' text-5xl lg:text-7xl leading-snug font-bold mb-5'>Contact Us</h1>
      </div>
      <div className='w-[100%] flex  justify-center my-4'>
        <div className='h-[50vh] w-[100%] md:w-[60%] p-4 flex md:flex-row flex-col justify-between items-center'>
          <form className='md:w-[50%] w-[100%]' onSubmit={handleSubmit}>
            <div className='my-4'>
              <input name='name' onChange={handleChange} value={formData.name} className='outline-none border-mycolor pl-2 py-3 rounded-lg border-[2px] w-[100%]' type="text" placeholder='Enter Name' />
            </div>

            <div className='my-4'>
              <input name='email' onChange={handleChange} value={formData.email} className='outline-none border-mycolor pl-2 py-3 rounded-lg border-[2px] w-[100%]' type="email" placeholder='Enter Email' />
            </div>

            <div className='my-4'>
              <textarea onChange={handleChange} name='message' value={formData.message} className='outline-none border-mycolor pl-2 py-3 rounded-lg border-[2px] w-[100%]' placeholder='Enter your Message' />
            </div>
            <button className='outline-none bg-mycolor w-[100%] py-2 border rounded-2xl text-white font-bold hover:text-mycolor hover:bg-white hover:border-mycolor hover:border-[2px]'>Submit</button>
          </form>
          <hr className='md:border-l-2 border-mycolor md:h-[100%]' />
          <div className='flex md:flex-col gap-20 md:pb-0 my-8 pb-8'>

            <a href='https:facebook.com' className=' text-mycolor mx-3 cursor-pointer'><FaFacebookSquare className=' w-6 h-6' /></a>
            <a href='https:gmail.com' className=' text-mycolor mx-3 cursor-pointer'><FaGoogle className=' w-6 h-6' /></a>
            <a href='https:twitter.com' className=' text-mycolor mx-3 cursor-pointer'><FaTwitter className=' w-6 h-6' /></a>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  )
}
