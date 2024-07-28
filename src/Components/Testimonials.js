import React from 'react';
import testimonial1 from './testimonial1.jpg'; 
import testimonial2 from './testimonial2.jfif';
import testimonial3 from './testimonial3.jfif';

const Testimonials = () => {
  return (
    <section id="event-testimonials-section" className="event-testimonials-section">
      <h2 className="testimonials-heading">Event Testimonials</h2>
      <p className="testimonials-intro">Discover what our guests have to say about their experiences at A Little Scoop of Happiness. From delightful ice cream tastings to fun-filled community events, our customers have shared their joy and memorable moments with us. Here’s what they have to say:</p>
      
      <div className="testimonials-gallery">
        <div className="testimonial-item">
          <img src={testimonial1} alt="Happy Guest 1" className="testimonial-image" />
          <blockquote className="testimonial-quote">
            <p>"The ice cream tasting event was an absolute delight! The flavors were extraordinary, and the atmosphere was so welcoming. I can't wait to attend the next event!"</p>
            <footer className="testimonial-footer">- Usha</footer>
          </blockquote>
        </div>
        <div className="testimonial-item">
          <img src={testimonial2} alt="Happy Guest 2" className="testimonial-image" />
          <blockquote className="testimonial-quote">
            <p>"A Little Scoop of Happiness truly lives up to its name. The community fundraiser was a fantastic experience, and it was wonderful to support a good cause while enjoying delicious ice cream."</p>
            <footer className="testimonial-footer">- Rajeev</footer>
          </blockquote>
        </div>
        <div className="testimonial-item">
          <img src={testimonial3} alt="Happy Guest 3" className="testimonial-image" />
          <blockquote className="testimonial-quote">
            <p>"The summer festival was a blast! From the fun activities to the scrumptious ice cream, everything was perfectly organized. It’s clear that a lot of love goes into every event!"</p>
            <footer className="testimonial-footer">- Adhitya</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
