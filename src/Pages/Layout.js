import React from 'react'
import './Pages.css'
import SideBar from '../Component/SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Layout = () => {
        const {isOpen} = useSelector((state)=>state.comman)
  return (
   <div className='portfolio-layout'>
       <div className={isOpen ? 'portfolio-layout-leftside active' : 'portfolio-layout-leftside' }>
               <SideBar/>
       </div>  
       <div className='portfolio-layout-rightside'>
               <Outlet/>
       </div>
   </div>
  )
}

export default Layout