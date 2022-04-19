import React from 'react'

const Category = () => {
  return (
    <div className='border-2 sticky top-20 rounded-xl shadow-md w-2/5 h-auto p-5 m-auto mt-10 bg-green-100 border-t-4  border-green-400 px-10'>
    <li className='m-2 cursor-pointer hover:text-orange-500'>HTML (12)</li>
    <li className='m-2 cursor-pointer hover:text-orange-500'>CSS (25)</li>
    <li className='m-2 cursor-pointer hover:text-orange-500'>JavaScript (47)</li>
    <li className='m-2 cursor-pointer hover:text-orange-500'>React Js (12)</li>
    <li className='m-2 cursor-pointer hover:text-orange-500'>DSA (150)</li>
    <li className='m-2 cursor-pointer hover:text-orange-500'>Other (9)</li>
    
</div>
  )
}

export default Category