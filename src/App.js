import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Daseboard from './admin/Daseboard'
import WritePost from './admin/WritePost'
import About from './components/About'
import CardDetails from './components/CardDetails'
import Combo from './components/Combo'
import Contact from './components/Contact'
import Footer from './components/Footer'
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
          <Route path='/admin'> 
              <Route path='daseboard' element={<Daseboard/>}/>
              <Route path='writepost' element={<WritePost/>}/>
          </Route>



        </Routes>
        
        <Footer/>
        
    </>
  )
}

export default App