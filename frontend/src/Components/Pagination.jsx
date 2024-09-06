import React from 'react'

export default function Pagination({ blogs, currentPage, pagesize, onPageChange }) {

    const totalpage = Math.ceil(blogs.length / pagesize);

    
    const renderpaginationLinks = () => {
        return Array.from({ length: totalpage }, (_, i) => i + 1).map((pageNumber) => (
            <li className={pageNumber === currentPage ? "activerpagination" : ''} key={pageNumber}>
                <a href="#" onClick={() => onPageChange(pageNumber)} className='border border-[#ccc] px-2 py-1 hover:bg-mycolor hover:text-white hover:font-bold'> {pageNumber} </a>
            </li>
        ))
    }
    return (
        <div>
        <ul className='pagination my-8 flex-wrap gap-4'>
            <li>
                <button onClick={() => onPageChange(currentPage - 1)} className=' hover:cursor-pointer' disabled={currentPage === 1}>Previous</button>
            </li>
            <div className='flex gap-3'>{renderpaginationLinks()}</div>
            <li>
                <button onClick={() => onPageChange(currentPage + 1)} className=' hover:cursor-pointer' disabled={currentPage === totalpage}>
                    Next
                </button>
            </li>
        </ul>
        </div>
    )
}
