import React from 'react'

const WritePost = () => {
  return (
    <div className='mt-10 w-11/12 m-auto flex flex-col justify-center gap-2'>
        <label className='text-xl '> Title:</label>
        <input type="text" className='block h-10 px-5 rounded shadow-md focus:outline-none focus:bg-cyan-50' placeholder='Enter Your Title' maxLength="100"></input>
        <label className='text-xl '> Choose Thumbnail:</label>
        <input type="file" className='block h-10 w-1/4 cursor-pointer'></input>
        
        <label className='text-xl '> Youtube Video:</label>
        <input type="text" className='block h-10 px-5 rounded shadow-md focus:outline-none focus:bg-cyan-50' placeholder='Enter Youtube video Emabadded Code'></input>
        <label className='text-xl '> Desciption:</label>
        <textarea className='block px-5 h-36 p-2 rounded shadow-md focus:outline-none focus:bg-cyan-50' placeholder='Enter your Description'></textarea>
        <label className='text-xl '> Hints:</label>
        <textarea className='block px-5 h-28 p-2 rounded shadow-md focus:outline-none focus:bg-cyan-50' placeholder='Enter your Hints'></textarea>
        <label className='text-xl '> Code:</label>
        <textarea className='block px-5 h-36 p-2 rounded shadow-md focus:outline-none focus:bg-cyan-50' placeholder='Put your Code here with proper Format'></textarea>
        <button className='bg-orange-500 px-4 py-2 mt-2 text-white rounded border-sm shadow-lg shadow-orange-200 w-full hover:bg-orange-600'>Publish</button>

    </div>
  )
}

export default WritePost