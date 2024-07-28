import React from 'react';

const Contactus = () => {
  return (
    <div className="contact-us-container">
      <main>
        <section id="contact-section" className="contact-section">
          <h2>Contact Form</h2>
          <form>
            <div className="contact-form-group contact-full-width">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="contact-form-group contact-full-width">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-form-group contact-full-width">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-submit-button">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contactus;
