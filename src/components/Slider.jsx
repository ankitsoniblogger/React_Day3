import React from 'react'


const image = [
    './Media/s1.jpg'  
    
]   

const Slider = () => {
  return (
    <>
        <div className='select-none '>
            <img src={image} className='h-96  w-full' alt="slider" />
            <img src={image} className='h-96  w-full' alt="slider" />
            <img src={image} className='h-96  w-full' alt="slider" />
        </div>
    </>
  )
}

export default Slider