import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Media/ankitsonilogo.png'
import Home from './Home'
import WritePost from './WritePost'


const Daseboard = () => {
  return (
    <div className='w-11/12 border-2 m-auto mt-10 flex gap-2'>
        <div className='bg-gray-700 w-1/6 p-4 px-10 text-white items-center justify-center' >
            <img src={logo} alt="logo" className='mt-10 mb-20'/>
            <p className='flex mt-5 gap-2 cursor-pointer items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg><h1 className='text-xl'>Daseboard</h1>
        </p>
        <p className='flex mt-5 gap-2 cursor-pointer items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
</svg><h1 className='text-xl'> <Link to="/admin/writepost">  Posts </Link> </h1>
        </p>
        </div>
        <div className='bg-gray-100 p-2 px-10 w-full'>
            <h1>{<Home/>}</h1>
            </div>    

    </div>
  )
}

export default Daseboard