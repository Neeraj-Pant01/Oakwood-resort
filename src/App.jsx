import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Discover from './pages/Discover'
import CustomNav from './customComponents/CustomNav'
import './index.css'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <CustomNav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/discover' element={<Discover />}/>
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
