//..........
//importing
//..........
import React,{useState} from 'react'
import {UseAppContext} from '../context/appContext.js'
import logo from '../assets/images/khaled_logo.png'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {links} from '../utils/links.js'


//..........
//App
//..........
const Navbar = () => {
  const {openSideBar}=UseAppContext()
  const [changeNav, setChangeNav]=useState(false)
  const changeNavBar = ()=>{
    if(window.scrollY>80){
      setChangeNav(true)
    }
    else{
      setChangeNav(false)
    }
  }
  window.addEventListener('scroll', changeNavBar)
  return(
    <nav className={changeNav ?'navbar-fixed': 'navbar-General'}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} className='nav-logo' alt="logo" />
          </Link>
          <button type='button' className='nav-btn' onClick={()=>openSideBar()}>
            <FaBars/>
          </button>
        </div>
        <ul className='nav-links'>
          {
            links.map((i)=>{
              const {id, text, path} = i
              return(
                <li key={id}>
                  <Link to={path}>{text}</Link>
                </li>
              )
            })
          }
        </ul>
        </div>
    </nav>
  )
}
//..........
//exporting
//..........
export default Navbar
