import React from 'react'
import { Link } from 'react-router-dom'
import card from '../Media/CYGNET (3).png'




const Card = () => {
  return (
    <div>
    <div className='flex border-2 border-l-4 border-orange-600 rounded-xl shadow-md bg-white w-11/12 h-40 p-5 m-auto mt-10 mb-10 overflow-hidden'>
        <img src={card} className='object-cover rounded-full' alt="card images" />    
        <div className='mx-10'>
            <h1 className='font-semibold font-RoundPro text-2xl cursor-pointer hover:text-orange-500 ease-out duration-300'>
                <Link to='/card-details'> Lorem ipsum dolor sit amet consectetur adipisicing.</Link></h1>
            <p className='mt-2 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus deserunt perferendis cumque nihil fuga nemo excepturi quos odio ea nulla velit molestiae inventore id, eius consectetur, hic laborum quidem?</p>
            
        </div>
    </div>
  

    </div>
  )
}

export default Card