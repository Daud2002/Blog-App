import React, { useEffect, useState } from 'react'
import { FiActivity } from "react-icons/fi";
import Banner from '../Components/Banner';
import BlogsPages from '../Components/BlogsPages';

export default function Home() {
  return (
    <div>
     <Banner />
     <BlogsPages />

    </div>
  )
}
