import React, { useEffect, useState } from 'react'
import { FiActivity } from "react-icons/fi";

export default function Nav() {

  let [data, setdata] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((res) => res.json())
      .then((finalres) => {
        setdata(finalres);

      })
  }, [])


  const render_final = data.map((items, i) => {
    return (

      <div className='border border-solid border-black rounded text-center w-[30%] h-[50vh] m-4 my-10 p-4 overflow-hidden'>
        <h1 className=' text-[20px] font-bold font-serif'>{items.title}</h1>
        <p className=' text-[10px]'>{items.category}</p>
        <p className=' mt-16'>{items.content}</p>
      </div>

    )
  })


  return (
    <div>

      <div className='flex flex-row justify-center'>
        <FiActivity aria-hidden="true" className=' my-auto' />
        <h1 className='font-bold text-2xl underline italic p-2'>
          Welcome to Blogging App
        </h1>
        <FiActivity aria-hidden="true" className='my-auto' />

      </div>
      <div className='  flex overflow-hidden flex-wrap '>
        {render_final}
      </div>


    </div>
  )
}
