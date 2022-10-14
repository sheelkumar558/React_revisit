import React from 'react'
import {BiCheck} from 'react-icons/bi'

const ServiceElementDetails = (
    detail
) => {
    detail = detail.detail

    return (
        <li className='service__element-detailElement'>
            <BiCheck className='service__element-detailElement-icon'/>
            <p>
                {detail}
            </p>
        </li>
    )
}

export default ServiceElementDetails