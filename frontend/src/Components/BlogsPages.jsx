import { useState, useEffect } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';
import axios from 'axios';

export default function BlogsPages() {

  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setblogs] = useState([]);
  const pagesize = 12;
  const [selectedCategory, setselectedCategory] = useState(null);
  const [activeCategory, setactiveCategory] = useState(null);

  const fetch_data = async(url) =>{
    const response = await axios.get(url);
    setblogs(response.data);
  }

  useEffect(() => {
    let url = `https://apiblogsbydaud.vercel.app/blogs?page=${currentPage}&limit=${pagesize}`;
    if (selectedCategory) {
      url += `&category=${selectedCategory}`
    }
   fetch_data(url);

  }, [currentPage, pagesize, selectedCategory])

  // PAGINATION
  const handlepageChange = (PageNumber) => {
    setCurrentPage(PageNumber)
  }

  const handleCategoryChange = (category) => {
    setselectedCategory(category)
    setCurrentPage(1)
    setactiveCategory(category)
  }

  return (

    <div>
      <div>
        <CategorySelection onselectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory} />
      </div>

      <div className=' flex flex-col lg:flex-row gap-10'>
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pagesize={pagesize} />
        <div >
          <Sidebar />
        </div>
      </div>

      <div>
        <Pagination blogs={blogs} currentPage={currentPage} pagesize={pagesize} onPageChange={handlepageChange} />
      </div>

    </div>
  )
}
