import React from 'react'
import {
  Navbar,
  Sidebar,
  Header,
  About,
  Services,
  Projects,
  Connect,
  Skills,
  Blog,
  Footer
} from '../components'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Sidebar/>
      <Header/>
      <About/>
      <Services/>
      <Projects/>
      <Connect/>
      <Skills/>
      <Blog/>
      <Footer/>
    </main>
  )
}

export default Home
