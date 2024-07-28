import React from 'react';
import logo from './icecream.webp'; // Update with actual team images if available

const Introabout = () => {
  return (
    <div className="introabout">
     <section className="our-story-section">
  <h2>A little Scoop Of Happiness</h2>
  <p>
    The journey of "A Little Scoop of Happiness" began with a simple yet profound vision: to create gelato that transcends the ordinary and brings joy to every customer. Our founder, deeply passionate about the art of gelato-making, sought to craft an experience that would not only satisfy the taste buds but also warm the heart. Starting from a modest kitchen, the dream quickly grew into a vibrant, beloved ice cream haven. By focusing on the finest ingredients and innovative recipes, we set out to redefine what gelato could be, infusing every scoop with creativity and dedication.
  </p>
  <p>
    As we grew, so did our <strong>commitment to quality and community</strong>. Each batch of gelato is a testament to our dedication to excellence, with flavors meticulously developed to delight and surprise. Over the years, "A Little Scoop of Happiness" has become more than just a place to enjoy gelato—it’s a destination that brings people together and celebrates life’s sweet moments. We take pride in being a cornerstone of our community, where every visit offers a moment of joy and a reminder of the simple pleasures in life.
  </p>
  <p>
 </p>
  <div className='section-img'>
    <img src={logo} alt="Our Story" />
  </div>
</section>
    </div>
  );
};

export default Introabout;
