import React from 'react';
import images from './images.jpg'; 
import event2 from './event2.jpg';
import event3 from './event3.jpg';

const PastEvents = () => {
  return (
    <section id="past-events-section" className="past-events-section">
      <h2 className="past-events-heading">Past Events</h2>
      <p className="past-events-intro">Reflect on the delightful events we've hosted at A Little Scoop of Happiness. From our ice cream tasting parties to community fundraisers, our events have brought joy and laughter to our guests.</p>
      
      <div className="past-events-gallery">
        <div className="past-events-item">
          <img src={images} alt="Ice Cream Tasting Event" className="past-events-image" />
          <p className="past-events-description">Ice Cream Tasting Party - A day full of sweet surprises and delightful flavors.</p>
        </div>
        <div className="past-events-item">
          <img src={event2} alt="Community Fundraiser" className="past-events-image" />
          <p className="past-events-description">Community Fundraiser - Supporting local causes with every scoop.</p>
        </div>
        <div className="past-events-item">
          <img src={event3} alt="Summer Festival" className="past-events-image" />
          <p className="past-events-description">Summer Festival - Celebrating the sunny season with cool treats and fun activities.</p>
        </div>
      </div>
    </section>
  );
}

export default PastEvents;
