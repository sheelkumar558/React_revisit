import React from 'react'
import './portfolio.css'
import PortfolioItem from './PortfolioItem'
import PortfolioViewModel from './PortfolioViewModel'

const Portfolio = () => {
  let projects = PortfolioViewModel.map((project) => {return <PortfolioItem model = {project}/>})

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects}
      </div>
    </section>
  )
}

export default Portfolio