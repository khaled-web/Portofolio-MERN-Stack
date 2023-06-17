import React from 'react'
import {services} from '../utils/links'
import {Link} from 'react-router-dom'

const Services = () => {
  return (
   <section className="section services bg-grey">
    <div className="section-title services-title">
     <h2>services</h2>
     <div className="underline"></div>
    </div>
    <div className="services-container">
     {
      services.map((service)=>{
       const {id,icon, title,subject,style}=service
       return(
        <article key={id} className={`service-item ${style}`}>
         <div className="front-text">
          {icon}
          <h1>{title}</h1>
         </div>
         <div className="back-text">
          <h1>{title}</h1>
          <p>
           {subject}
          </p>
          <Link to="/projects" className='btn'> more details</Link>
         </div>
        </article>
       )
      })
     }
    </div>
   </section>
  )
}

export default Services
