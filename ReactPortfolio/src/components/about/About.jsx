import React from 'react'
import './about.css'
import AboutMeImage from './AboutMeImage'
import AboutContent from './AboutContent'

const About = () => {
  return (
    <section id ='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <AboutMeImage/>  
        <AboutContent/>
      </div>
      
    </section>
  )
}

export default About