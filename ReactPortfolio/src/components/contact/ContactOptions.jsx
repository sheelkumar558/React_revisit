import React from 'react'
import ContactOptionsItem from './ContactOptionsItem'

const ContactOptions = (
    model
) => {
    model = model.model

    let options = model.map((element) => {return <ContactOptionsItem model = {element}/>})

    return (
        <div className="contact__options">
            {options}
        </div>
    )
}

export default ContactOptions