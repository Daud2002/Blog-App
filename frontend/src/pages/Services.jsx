import React from 'react';
import frontend from '../images/frontend.jpeg'
import backend from '../images/backend.png'
import teaching from '../images/teaching.jpeg'
import connecting from '../images/connecting.jpeg'
export default function Services() {
  return (
    <>
      <div className='py-40 bg-black text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Our Services</h1>
      </div>
      <div className='w-[100%] flex justify-center my-4'>
        <div className='w-[60%] p-4 flex flex-col items-center text-center'>
          <h2 className='text-3xl font-bold my-4'>What We Offer</h2>
          <p className='text-lg leading-relaxed my-4'>
            We offer a variety of services to help you make the most out of our blog. From custom content creation to consulting services, we're here to support your needs.
          </p>
          <div className='flex flex-wrap justify-center'>
            <div className='w-[300px] m-4 p-4 rounded-lg text-center border-mycolor border-[2px] shadow-2xl'>
              <img src={frontend} alt='Service 1' className='w-24 h-24 rounded-full mx-auto mb-4' />
              <h3 className='text-xl font-bold'>Frontend Developement</h3>
              <p className='text-lg leading-relaxed'>
                Our team of expert writers can create high-quality, engaging content tailored to your specific needs.
              </p>
            </div>
            <div className='w-[300px] m-4 p-4 rounded-lg text-center border-mycolor border-[2px] shadow-2xl'>
              <img src={backend} alt='Service 2' className='w-24 h-24 rounded-full mx-auto mb-4' />
              <h3 className='text-xl font-bold'>Backend Developmentt</h3>
              <p className='text-lg leading-relaxed'>
                We offer SEO optimization services to help your content reach a wider audience and rank higher in search results.
              </p>
            </div>
            <div className='w-[300px] m-4 p-4 border-[2px] rounded-lg text-center border-mycolor shadow-2xl'>
              <img src={teaching} alt='Service 3' className='w-24 h-24 rounded-full mx-auto mb-4' />
              <h3 className='text-xl font-bold'>Teaching Services</h3>
              <p className='text-lg leading-relaxed'>
                Our social media experts can manage your profiles, increase your following, and boost engagement.
              </p>
            </div>
            <div className='w-[300px] m-4 p-4 border-[2px] rounded-lg text-center border-mycolor shadow-2xl'>
              <img src={connecting} alt='Service 4' className='w-24 h-24 rounded-full mx-auto mb-4' />
              <h3 className='text-xl font-bold'>Connecting Service</h3>
              <p className='text-lg leading-relaxed'>
                We offer consulting services to help you develop effective content strategies and grow your online presence.
              </p>
            </div>
            {/* Add more services as needed */}
          </div>
        </div>
      </div>
    </>
  );
}
