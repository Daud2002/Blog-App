import React from 'react'
import BlogsPages from '../Components/BlogsPages'


export default function Blogs() {

 
  return (
    <div>
      <div className=' py-40 bg-black text-white text-center mb-9'>
        <h1 className=' text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blogs</h1>
      </div>

      {/* All Blogs Container */}


      <div className=' max-w-7xl mx-auto'>
        <BlogsPages/>
      </div>
    </div>
  )
}
