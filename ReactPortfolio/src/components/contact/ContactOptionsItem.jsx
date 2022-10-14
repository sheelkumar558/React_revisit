import React from 'react'

const ContactOptionsItem = (
    model
) => {
    model = model.model

    return (
        <div className="contact__option">
            <div className='contact__option-icon'>
                {model.logo}
            </div>
            <h4>
                {model.title}
            </h4>
            <h5 className='text-light'>
                {model.subtitle}
            </h5>

            <div className='contact__option-action'>
                <a href ={model.href} target = '_blank' rel="noopener noreferrer"> Send a message </a>
            </div>
        </div>
    )
}

export default ContactOptionsItem