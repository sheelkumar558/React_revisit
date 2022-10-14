import React from 'react'
import './experience.css'
import ExperienceCard from './ExperienceCard'
import viewModel from './ExperienceViewModel'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <ExperienceCard model = {viewModel.frontEndData}/>
        <ExperienceCard model = {viewModel.backEndData} />
      </div>
    </section>
  )
}

export default Experience