import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function BlogDetails() {

    const [dataz, setData] = useState();
    const location = useLocation();
    const new_url = location.pathname.split('/')[2];


    useEffect(() => {
        const fetchList = async () => {
            const response = await axios.get('http://localhost:4000/blogs');
            setData(response.data)
        }
        fetchList();
    }, [])

    if (!Array.isArray(dataz)) {
        return <h1>Invalid data format</h1>;
    }

    const blogs_list = dataz.filter((v) => v.id === parseInt(new_url))[0];


    return (
        <div className='flex md:flex-row flex-col w-[100%] h-[80vh] items-center justify-between absolute z-0 top-[15vh]'>
            <div className='md:w-[50%] flex justify-center'>
                <img src={blogs_list.image} alt="" className='w-[90%] border rounded-xl shadow-gold' />
            </div>

            <hr className='md:border-l-2 border-mycolor md:h-[90vh]' />

            <div className='md:w-[50%] flex justify-center'>
                <div className=' shadow-2xl p-8 flex justify-center flex-col w-[90%]'>
                    <h1 className='font-extrabold'>{blogs_list.title}</h1>
                    <p className='mt-4'>{blogs_list.content}</p>
                    <div className='flex justify-between mt-8'>
                        <span className='font-bold underline text-mycolor'>Publish Date</span>
                        <span className='font-bold'>{blogs_list.published_date}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
