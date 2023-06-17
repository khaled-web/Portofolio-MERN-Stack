import React from 'react'
import {SocialMedia} from '../utils/links'
const Footer = () => {
  return ( 
    <footer className='footer'>
      <ul className="social-icons footer-icons">
      {
        SocialMedia.map((i)=>{
          const {id, url, icon}=i
          return(
            <li key={id}>
              <a target='_blank' className='social-icon footer-icon' href={url}>
                {icon}
              </a>
            </li>
          )
        })
      }
      </ul>
      <p>
        &copy; khaled Mohamed {new Date().getFullYear()}. all rights reserved
      </p>
    </footer>
  )
}

export default Footer