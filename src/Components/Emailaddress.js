import React from 'react';

const Emailaddress = () => {
  return (
    <div className="email-address-container">
      <section className="email-address-section">
        <h2 className="email-address-heading">Email Address</h2>
        <p className="email-address-text">
          Email us at: <a href="mailto:info@yourdomain.com" className="email-address-link">info@yourdomain.com</a>
        </p>
      </section>
    </div>
  );
}

export default Emailaddress;
