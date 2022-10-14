import React from 'react'
import './contact.css'
import ContactViewModel from './ContactViewModel';
import ContactForm from './ContactForm.jsx';
import ContactOptions from './ContactOptions'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <ContactOptions model = {ContactViewModel}/>
        <ContactForm/>
      </div>
    </section>
  )
}

export default Contact