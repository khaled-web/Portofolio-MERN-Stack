import React from 'react'
import {projects} from '../utils/links'
import {Link} from 'react-router-dom'



const Projects = () => {
  return (
   <section className="section projects">
    <div className="section-title projects-title">
    <h2>projects</h2>
    <div className="underline"></div>
    <p className='projects-text'>
       Software projects almost always face roadblocks and complications, and being able to identify obstacles, solve issues quickly and efficiently, and get the job done properly and within the deadline is a key attribute for a MERN-stack developer.
    </p>
    </div>
    <div className="section-center projects-center">
     {
      projects.map((project)=>{
       const {id, style, img, title, owner}=project
       return(
        <Link key={id} to="/projects" className={`${style}`}>
         <article className='project'> 
          <img src={img} alt="project" className='project-img'/>
          <div className="project-info">
           <h4>{title}</h4>
           <p>{owner}</p>
          </div>
         </article>
        </Link>
       )
      }).slice(0,4)
     }
    </div>
   </section>
  )
}

export default Projects
