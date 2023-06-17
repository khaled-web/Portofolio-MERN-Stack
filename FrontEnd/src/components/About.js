import React from 'react'
import AboutImg from '../assets/images/About-me.jpg'

const About = () => {
  return (
  <section className='section about'>
   <div className="section-center about-center">
    <article className='about-img'>
     <img src={AboutImg} alt="about" className='about-photo'/>
    </article>
    <article className='about-info'>
    <div className="section-title about-title">
     <h2>about</h2>
     <div className="underline"></div>
    </div>
    <p>
     I’ m a Freelance MERN - Stack Web Developer located in Egypt.I have a serious passion
     for UI effects, animations, and creating intuitive, dynamic user experiences.
    </p>
    <p>
      Well-organized person, problem solver, independent employee with high attention to detail.
    </p>
    <p>
    Interested in the entire MERN-Stack spectrum and working on ambitious projects with positive people.
    </p>
    </article>
  </div>
  </section>
  )
}

export default About
