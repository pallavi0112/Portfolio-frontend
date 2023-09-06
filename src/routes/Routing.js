import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Layout from '../Pages/Layout'
import About from '../Pages/About'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Portfolio from '../Pages/Portfolio'
import Services from '../Pages/Services'
const Routing = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>} />
                <Route path='/aboutus' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/services' element={<Services/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default Routing