import React from 'react'
import {Navbar,Sidebar,Footer} from '../components'
import aboutImg from '../assets/images/about-page.jpg'

const About = () => {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <section className="section projects about-bcg">
        <div className="section-title projects-title">
          <h2>about</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center about-center">
          <article className="about-img">
            <img src={aboutImg} alt="" className="about-photo" />
          </article>
          <article className="about-info">
            <p>I have Brilliant Ideas In The Process Of Building Websites And Applications And All About The Coding And Programming That Powers The Website's Functionality.</p>
            <p> I create websites considering the business of clients' needs and goals perfectly blended with my experience and strategies to provide the clients with a website that will be impressive..</p>
            <p>I have strategy to make your business website stand apart from that of your competitor, and meet the project's goals on time and within budget.</p>
          </article>
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default About