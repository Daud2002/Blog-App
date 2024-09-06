import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogCards({ blogs, currentPage, selectedCategory, pagesize }) {
  
  const filtered_blogs = blogs
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pagesize, currentPage * pagesize);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 p-5'>
      {filtered_blogs.map((items) => {
        return (
          <div key={items.id} className='shadow-2xl p-2'>

            <div className='w-full flex flex-col'>
              <img src={items.image} alt="" className='m-auto border rounded' />
              <Link to={`/blogs/${items.id}`} className=' hover:text-mycolor font-semibold p-3 text-justify'>{items.title}</Link>
              <p className='ml-4 mb-1 mt-2 font-light flex justify-between pr-3'><span className=' font-semibold'>Author: </span>{items.author}</p>
              <p className=' ml-4 mb-4 font-light flex justify-between pr-3'><span className='font-semibold'>Date: </span>  {items.published_date}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
