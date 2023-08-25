import React from 'react';
import './contact.css';
import {FaViber} from 'react-icons/fa';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_67bsvhi', 'template_tdmt4nq', form.current, 'vAW3IuLohPXWKPUJp');
    Swal.fire({
      title: 'Your message has been sent.',
      icon:'success',
      confirmButtonText: 'OK'
    });
    e.target.reset();
  };

  return (
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <FaViber className="contact__option-icon" title="Viber" />
              <h4>Viber</h4>
              <h5>+63966-912-8627</h5>
              <a href="viber://contact?number=%2B639669128627" target="_blank">Write Me &gt;</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" title="Messenger" />
              <h4>Messenger</h4>
              <h5>Niño Olor</h5>
              <a href="https://m.me/ninoolor" target="_blank">Write Me &gt;</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" title="WhatsApp" />
              <h4>WhatsApp</h4>
              <h5>+63966-912-8627</h5>
              <a href="https://api.whatsapp.com/send?phone=639669128627" target="_blank">Write Me &gt;</a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}

          <form action={form} onSubmit={sendEmail} ref={form}>
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="7" required ></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contact;
