import React from 'react'

const AboutCard = ({
    className = 'about__card',
    icon,
    title,
    subTitle
}) => {
  return (
    <article className={className}>
        {React.createElement(icon, {className: 'about__icon'})}
        <h5>{title}</h5>
        <small>{subTitle}</small>
    </article>
  )
}

export default AboutCard