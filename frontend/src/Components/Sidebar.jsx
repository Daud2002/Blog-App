import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import axios from 'axios';

export default function Sidebar() {

  let [sidedData, setsidedData] = useState([]);

  const fetch_data = async() =>{
    const response = await axios.get('https://apiblogsbydaud.vercel.app/blogs');
    setsidedData(response.data.slice(0,15))
  }

  useEffect(() => {
    fetch_data();
  }, [])


  return (
    <div className='mr-3'>

                                                            {/* Latest Blogs */}
      <div className='md:p-0 p-6'>
        <h3 className='text-2xl font-bold px-4 text-center mb-6 text-mycolor'>Latest Blogs</h3>
        <div>

          {
            sidedData.slice(0, 5).map(data => <div key={data.id}className=' border-b-2 py-3'>
              <h3 className=' font-medium text-justify'>{data.title}</h3>
              <Link to={`/blogs/${data.id}`} className=' hover:text-mycolor inline-flex items-center font-bold pt-4'>Read More <FaLongArrowAltRight className=' mt-1 ml-2' /></Link>
            </div>)
          }
        </div>
      </div>
                                                              {/* Popular Blogs */}
      <div className='md:p-0 p-6 mt-8'>
        <h3 className='text-2xl font-bold px-4 text-center mb-6 text-mycolor'>Popular Blogs</h3>
        <div>

          {
            sidedData.slice(6, 11).map(data => <div key={data.id} className=' border-b-2 py-3'>
              <h3 className=' font-medium text-justify'>{data.title}</h3>
              <Link to={`/blogs/${data.id}`} className=' hover:text-mycolor inline-flex items-center font-bold pt-4'>Read More <FaLongArrowAltRight className=' mt-1 ml-2' /></Link>
            </div>)
          }
        </div>
      </div>


    </div>
  )
}
