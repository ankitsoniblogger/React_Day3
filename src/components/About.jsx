import React from 'react'
import logo from '../Media/CYGNET (3).png'
import img from '../Media/CYGNET (4).png'

const About = () => {
  return (
    <>
    <div className='mt-10 py-10 flex border-2 shadow-lg rounded-lg shadow-orange-200 p-5 space-x-10 w-3/4 justify-center m-auto'>
      
      <div className='w-1/5'>
        <img src={logo} alt="avatar" className='shadow-lg object-cover rounded-full shadow-green-200'/>
        </div>
        <div className='mt-10 w-2/4 '>
        <h1 className='font-bold text-3xl '>Welcome to Our Classes!</h1>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus corporis sed non minus esse, ab commodi modi explicabo tempora ea est recusandae voluptatem possimus illo. Eligendi dolor quis distinctio placeat magni, officia exercitationem omnis numquam voluptatibus deserunt voluptates provident odio eos debitis quisquam accusamus? Tempore amet quibusdam iste id exercitationem.</p>
      </div>
      
    </div>
    <Heading/>
    <Scard/>
    
    </>
  )
}

const Heading = () => {
  return (
    <div className='flex justify-center mt-10'>
      <h1 className='font-bold text-3xl'>Our Courses</h1>
      
    </div>
  )
}

const Scard = () => {
  return(
    <div className='grid gap-5 p-3  w-4/5 grid-cols-4 m-auto'>
           < ScardDetails/>
           < ScardDetails/>
           < ScardDetails/>
           < ScardDetails/>
           < ScardDetails/>
           < ScardDetails/>
           < ScardDetails/>
           < ScardDetails/>
    </div>

  )
}
const ScardDetails = () => {
  return(
      <div className='p-5 border-2 rounded-lg '>
      <img src={img} alt=""  className='rounded-xl object-cover shadow-sm shadow-orange-500' />
      <h1 className='text-center  text-3xl mt-1'>  HTML</h1>
      </div> 
  )
}

export default About