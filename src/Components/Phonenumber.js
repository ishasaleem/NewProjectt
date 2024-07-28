import React from 'react';

const Phonenumber = () => {
  return (
    <div className="phone-number-container">
      <section className="phone-number-section">
        <h2 className="phone-number-heading">Phone Number</h2>
        <p className="phone-number-text">
          Call us at: <a href="tel:+1234567890" className="phone-number-link">+1 (234) 567-890</a>
        </p>
      </section>
    </div>
  );
}

export default Phonenumber;
