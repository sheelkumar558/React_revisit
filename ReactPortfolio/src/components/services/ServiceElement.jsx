import React from 'react'
import ServiceElementDetails from './ServiceElementDetails'

const ServiceElement = (
    model
) => {
    model = model.model
    let details = model.details.map((detail) => {return <ServiceElementDetails detail={detail}/>})

    return (
        <article className="service__element">
            <h3 className='service__element-head'>
                {model.serviceName}
            </h3>
            <ul className="service__element-detail">
                {details}
            </ul>

        </article>
    )
}


export default ServiceElement