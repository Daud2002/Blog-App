import React from 'react'

export default function CategorySelection({ onselectCategory, activeCategory }) {

    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

    return (
        <div className='md:px-4 mb-8 lg:space-x-16 sm:space-x-8 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold justify-center px-0'>
            <button onClick={() => onselectCategory(null)} className={`lg:ml-12 pr-2 ${activeCategory ? "" : 'active-button'}`}>All</button>
            {categories.map((category,i) => (
                <button key={i} onClick={() => onselectCategory(category)}
                 className={`mr-2 space-x-16 ${activeCategory == category ? 'activebtn' : ''}`}>{category}</button>
            ))}
        </div>
    )
}
