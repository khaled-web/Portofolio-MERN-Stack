import React from 'react'
import VideoCo from '../assets/video/connect.mp4'
import AboutPoster from '../assets/images/About-me.jpg'
import {Link} from 'react-router-dom'

const Connect = () => {
  return (
    <section className="connect">
     <video controls autoPlay muted loop className='video-container' poster={AboutPoster}>
      <source src={VideoCo} type='video/mp4'/>
      sorry, your browser does not support embedded videos
     </video>
     <div className="video-banner">
      <div className="section-title">
       <h2>let's get in touch</h2>
       <div className="underline"></div>
      </div>
      <p className='video-text'>
         I'm interested in freelance opportunities - especially ambitious or large projects. however, if you have other request or question, don't hesitate to contact me.
      </p>
      <Link to="/contact" className='btn'>
       contact me
      </Link>
     </div>
    </section>
  )
}

export default Connect
