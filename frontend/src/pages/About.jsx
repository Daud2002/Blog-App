import React from 'react';
import user from '../images/download.jpeg'

export default function AboutUs() {
  return (
    <>
      <div className='py-40 bg-black text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About Us</h1>
      </div>
      <div className='w-[100%] flex justify-center my-4'>
        <div className='w-[60%] p-4 flex flex-col items-center text-center'>
          <h2 className='text-3xl font-bold my-4'>Our Story</h2>
          <p className='text-lg leading-relaxed my-4'>
            Welcome to our blog! We're a team of passionate writers and enthusiasts who love to share our thoughts, experiences, and knowledge on various topics. Our journey began with a simple idea: to create a space where we could express ourselves and connect with like-minded individuals.
          </p>
          <h2 className='text-3xl font-bold my-4'>Our Mission</h2>
          <p className='text-lg leading-relaxed my-4'>
            Our mission is to provide high-quality, engaging content that informs, entertains, and inspires our readers. Whether it's the latest trends, in-depth analysis, or personal stories, we strive to offer something for everyone.
          </p>
          <h2 className='text-3xl font-bold my-4'>Meet Me</h2>
          <div className='flex flex-wrap justify-center'>

            <div className='w-[300px] m-4 p-4 border-mycolor border-[2px] rounded-lg text-center shadow-2xl'>
              <img src={user} alt='' className='w-24 h-24 rounded-full mx-auto mb-4' />
              <h3 className='text-xl font-bold'>Daud Mir</h3>
              <p className='text-md text-gray-600'>Front end Web Developer</p>
              <p className='text-lg leading-relaxed'>
                Development is my passion and I have a fire in my heart to learn more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
