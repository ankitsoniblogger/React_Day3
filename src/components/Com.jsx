import React from 'react'

const Com = () => {
  return (
    <div className='shadow-green-500 shadow-lg bg-green-400 w-1/5 border-l-8 p-3 h-14 rounded-r flex justify-between items-center border-green-800 '>
       <h1 className=''> Hurray! You're Logged in!</h1> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
</svg>
    </div>
  )
}

const MyError = () => {
    return (
      <div className='shadow-red-500 shadow-lg bg-red-400 w-1/5 border-l-8 p-3 h-14 rounded-r flex justify-between items-center border-red-800 '>
         <h1 className=''> Ooops! You got an Error!</h1> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-200  cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
      </div>
    )
  }

export  {Com, MyError}