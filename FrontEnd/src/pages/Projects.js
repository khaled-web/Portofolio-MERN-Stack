import React from 'react'
import {Navbar,Sidebar,Footer} from '../components'
import {projects} from '../utils/links'
import { FaHome, FaGithub } from 'react-icons/fa';
const Projects = () => {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <section className="section projects-page">
        <div className="section-title projects-title">
          <h2>projects</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center projects-page-center">
          {
            projects.map((i)=>{
              const {id, img, title, subject,url} = i
              return(
                <article key={id} className="single-project">
                  <div className="project-container">
                    <img src={img} alt=""/>
                    <a href={url} className='project-icon' target="_blank">
                    <FaHome/>
                    </a>
                  </div>
                  <div className="project-details">
                    <h4>{title}</h4>
                    <p>{subject}</p>
                  </div>
                  <div className="project-footer">
                    <span><FaGithub/></span>
                    <a href="https://github.com/khaled-web/">source code</a>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
      <Footer/>
    </main>
  )
}

export default Projects