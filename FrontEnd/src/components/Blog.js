import React from 'react'
import {projects} from '../utils/links'
import pic from '../assets/images/blogImg.png'
import {Link} from 'react-router-dom'

const Blog = () => {
  return (
    <section className="section blog">
      <div className="section-title">        
      <h2>blog</h2>
      <div className="underline"></div>
      </div>

      <div className="section-center blog-center">
        {projects.map((i)=>{
          const {id, img, title, subject}=i
          return(
            <div key={id} className="card">
              <div className="card-side card-front">
                <img src={img} alt="singleItem"/>
                <div className="card-info">
                  <h4>{title}</h4>
                  <p>{subject}</p>
                </div>
                <div className="card-footer">
                  <img src={pic} alt="singlePic"/>
                  <p>5 min read</p>
                </div>
              </div>

              <div className="card-side card-back">
                <Link to="/projects" className='btn'>read more</Link>
              </div>
            </div>
          )
        }).slice(0,3)}
      </div>
    </section>
  )
}

export default Blog
