
// ContactSection.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Feel free to reach out for any inquiries or opportunities!</p>
        
       
        <form
          action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your form handling URL or service
          method="POST"
          className="contact-form"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input  className="input_sec"type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className="input_sec" type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea className="input_sec"  id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        {/* Alternative Contact Methods */}
        <div className="contact-info">
          <p>You can also reach me via:</p>
          <ul>
            <li>Email: <a href="https:://gmail.com">panwarkanu2001@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/ayush-panwar-30a977228/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            <li>GitHub: <a href="https://github.com/ayushpanwar112" target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
