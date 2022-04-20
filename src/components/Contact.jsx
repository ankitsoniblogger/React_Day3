import React from 'react'
import {Com, MyError} from './Com'

const Contact = () => {
  return (
    <div className='flex mt-20 justify-between mr-40'>
      <h1 className='text-8xl'>Contact</h1>
      <Com />
      <MyError/>
    </div>
  )
}

export default Contact