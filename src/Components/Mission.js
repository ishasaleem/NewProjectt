import React from 'react'
import logo from './mis.jpg'; 
const Mission = () => {
  return (
    <div>
        
     
      <section className=" mission-values-section">
        <h2>Mission and Values</h2>
        <p>
          Our mission at "A Little Scoop of Happiness" is to provide an unparalleled gelato experience that leaves a lasting impression. We are committed to using the finest ingredients, embracing creativity, and upholding the highest standards of quality. Our core values revolve around customer satisfaction, innovation, and community engagement. We strive to create a welcoming atmosphere where every scoop reflects our dedication to excellence, and every interaction upholds our commitment to making a positive impact.
        </p>
        <div className='section-img'>
          <img src={logo} alt="Mission and Values" />
        </div>
      </section>
    </div>
  )
}

export default Mission