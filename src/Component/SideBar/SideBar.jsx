import React from 'react'
import './sidebar.css'
import { Link , useLocation } from 'react-router-dom'
import {FaHome , FaUserAlt , FaListUl , FaComments ,FaBriefcase} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import {useDispatch , useSelector} from 'react-redux'
import { SideBarIsOpen } from '../../Features/CommanSlice'

const SideBar = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {isOpen} = useSelector((state)=>state.comman)
    
  return (
    <div className='portfolio-sidebar'>
        <div className='logo'>
           <Link to='/'><span>P</span>allavi</Link>
        </div>
        <div className='menu-toggler'>
        {
          !isOpen? <AiOutlineMenu onClick={() => dispatch(SideBarIsOpen(true))}/> : <RxCross2 onClick={() => dispatch(SideBarIsOpen(false))}/>
        }
        </div>
        <nav>
           <ul>
            <li className={location.pathname === '/' ? 'active' : ''} onClick={()=>dispatch(SideBarIsOpen(false))}><Link to='/'><FaHome/>Home</Link></li>
            <li className={location.pathname === '/aboutus' ? 'active' : ''} onClick={()=>dispatch(SideBarIsOpen(false))}><Link to='/aboutus'><FaUserAlt/>About Me</Link></li>
            <li className={location.pathname === '/services' ? 'active' : ''} onClick={()=>dispatch(SideBarIsOpen(false))}><Link to='/services'><FaListUl/>Services</Link></li>
            <li className={location.pathname === '/portfolio' ? 'active' : ''} onClick={()=>dispatch(SideBarIsOpen(false))}><Link to='/portfolio'><FaBriefcase/>Portfolio</Link></li>
            <li className={location.pathname === '/contact' ? 'active' : ''} onClick={()=>dispatch(SideBarIsOpen(false))}><Link to='/contact'><FaComments/>Contact</Link></li>
           </ul>
        </nav>
    </div>
  )
}

export default SideBar