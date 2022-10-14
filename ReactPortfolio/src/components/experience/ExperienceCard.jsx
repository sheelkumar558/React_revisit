import React from 'react'
import ExperienceContentElement from './ExperienceContentElement'

const ExperienceCard = (
    model
) => {
  let cards = model.model.skillLevelList.map((se) => {return <ExperienceContentElement skillElement = {se}/>;});

  return (
    <div className='experience__card'>
        <h3>{model.model.title}</h3>
        <div className='experience__cardContent'>
          {cards}
        </div>
    </div>
  )
}

export default ExperienceCard