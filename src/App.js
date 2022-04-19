import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import CardDetails from './components/CardDetails'
import Combo from './components/Combo'
import Contact from './components/Contact'
import Login from './components/Login'

import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Combo/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/card-details' element={<CardDetails/>}/>



        </Routes>
        
        
        
    </>
  )
}

export default App