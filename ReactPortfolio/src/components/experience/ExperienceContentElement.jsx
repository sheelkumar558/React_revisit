import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const ExperienceContentElement = (
    skillElement
) => {
  return (
    <article className='experience__cardElement'>
        <BsPatchCheckFill className='experience__cardElement-icon'/>
        <div className='experience__cardElement-content'>
          <h4>{skillElement.skillElement.title}</h4>
          <small className='text-light'>{skillElement.skillElement.level}</small>
        </div>
    </article>
  )
}

export default ExperienceContentElement