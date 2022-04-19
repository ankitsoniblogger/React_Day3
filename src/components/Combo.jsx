import React from 'react'
import Card from './Card'
import Category from './Category'

const Combo = () => {
  return (
    <div className='flex  w-4/5 m-auto'>
        <div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        
        <Category/>
    </div>
  )
}

export default Combo