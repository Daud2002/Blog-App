import React from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function Banner() {
  return (
    <div className=' bg-black  mx-auto px-4 py-32'>
      <div className='text-white text-center '>
        <h1 className=' text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to Daud's Blogs</h1>
        <p className='mx-auto mb-5 lg-w:3/5 font-primary text-gray-100'>It's your go-to destination for insightful, engaging, and diverse blog content. At Daud's Blogs, we believe in the power of words to inspire, educate, and entertain. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, tempora.</p>
        <div>
          <Link to="/about" className=' hover:text-mycolor inline-flex items-center font-medium'>Learn More <FaLongArrowAltRight className=' mt-1 ml-2' /></Link>
        </div>
      </div>
    </div>
  )
}
