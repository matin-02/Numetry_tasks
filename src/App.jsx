import React from 'react'
import Navbar from './Component/Navbar'
import { Routes,Route } from 'react-router-dom'
import About from './Component/Pages/About'
import Services from './Component/Pages/Services'
import Contact from './Component/Pages/Contact'
import Home from './Component/Pages/Home'
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </div>
  )
}

export default App