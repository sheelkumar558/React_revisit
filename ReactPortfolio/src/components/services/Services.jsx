import React from 'react'
import './services.css'
import ServicesViewModel from './ServicesViewModel'
import ServiceElement from './ServiceElement'

const Services = () => {
  let services = ServicesViewModel.map((se) => {return <ServiceElement model = {se}/>})

  return (
    <section id='services'>
      <h5>What I offer?</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {services}
      </div>
    </section>
  )
}

export default Services