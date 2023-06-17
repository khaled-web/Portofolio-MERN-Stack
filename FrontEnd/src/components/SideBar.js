import React, {useState} from 'react'
import logo from '../assets/images/khaled_logo.png'
import {Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import {links,SocialMedia} from '../utils/links'
import {UseAppContext} from '../context/appContext'

const SideBar = () => {
  const {isSidebarOpen,closeSideBar}=UseAppContext()
  return (
      <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>
          <button className='close-btn' type='button' onClick={()=>closeSideBar()}>
            <FaTimes/>
          </button>
        <ul className="links">
          {links.map((link)=>{
            const {id, text, path}=link
            return(
              <li key={id}>
                <a href={path} onClick={()=>closeSideBar()}>{text}</a>
              </li>
            )
          })}
        </ul>
        <ul className='social-icons'>
          {SocialMedia.map((i)=>{
            const {id, url, icon}=i
            return(
              <li key={id}>
                <a href={url} target="_blank" className="social-icon sidebar-icon">{icon}
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
  )
}

export default SideBar
