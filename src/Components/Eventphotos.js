import React from 'react';
import event4 from './event4.jpg'; 
import event from './event.jpeg';
import happyFaces from './happyFaces.jpg';

const FlavorfulMoments = () => {
  return (
    <section id="flavorful-moments" className="section flavorful-moments">
      <h2>Flavorful Moments</h2>
      <p>At A Little Scoop of Happiness, we cherish every moment spent enjoying our delicious ice cream. Our "Flavorful Moments" section celebrates the unique and memorable experiences we've shared with our community. From spontaneous taste tests to joyous celebrations, these moments capture the essence of our ice cream adventures.</p>
      
      <div className="moment-gallery">
        <div className="moment-item">
          <img src={event4} alt="Flavor Celebration" />
          <p>Flavor Celebration - A special event where we introduced new and exciting flavors to our beloved customers.</p>
        </div>
       
        <div className="moment-item">
          <img src={happyFaces} alt="Happy Faces" />
          <p>Happy Faces - A gallery of smiles and laughter captured during our ice cream social events.</p>
        </div>
        <div className="moment-item">
          <img src={event} alt="Scoop Frenzy" />
          <p>Scoop Frenzy - A fun-filled day of unlimited scoops and sweet surprises.</p>
        </div>
      </div>
    </section>
  );
}

export default FlavorfulMoments;
