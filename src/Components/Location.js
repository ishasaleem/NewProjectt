import React from 'react';

const Location = () => {
  return (
    <div className="location-container">
      <section className="location-section">
        <h2 className="location-heading">Location & Map</h2>
        <p className="location-text">Visit us at:</p>
        <address className="location-address">
          123 Ice Cream Lane<br />
          Sweet City, SC 12345<br />
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="location-link">View on Google Maps</a>
        </address>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.825464809559!2d-122.4089922846818!3d37.78367397975867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a62f91bfb%3A0x9c1fc4aa25623f1e!2sApple%20Park!5e0!3m2!1sen!2sus!4v1634251743407!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Location;
