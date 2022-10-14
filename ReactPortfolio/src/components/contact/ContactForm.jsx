import React, {useRef} from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init('{Public Key}');
    emailjs.sendForm('{Service ID}', '{template ID}', form.current)
  };

  return (
    <form className="contact__form" ref = {form} onSubmit={sendEmail}>
      <input type = 'text' name = 'name' placeholder='Fill Your Name' required />
      <input type = 'email' name = 'email' placeholder='Your Email' required />
      <textarea name = 'message' rows = '7' placeholder='Your Message' required></textarea>
      <button type = 'submit' className='btn btn-primary'>Send Message</button>
    </form>
  )
}

export default ContactForm