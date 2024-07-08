import React from 'react'
import './Contact.css';


function Contact() {
  return (
    <div className="contact-page">
      <div className="banner">
        <div className="banner-content">
          <h1>Get In Touch</h1>
          <p>We would love to hear from you. Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</p>
        </div>
      </div>
      <div className="contact-container">
        <div className="contact-box">
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="text" name="phone" placeholder="Phone" required />
              <input type="text" name="company" placeholder="Company" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>360 King Street, Feasterville Trevose, PA 19053</p>
            <p>(800) 900-200-300</p>
            <p><a href="mailto:info@company.com">info@company.com</a></p>
            <div className="social-icons">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact