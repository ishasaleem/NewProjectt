import React from 'react';
import logo from './icc.jpg';

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h3>About Us</h3>
            <h1>Welcome to A Little Scoop of Happiness</h1>
            <p>
            <p>
        Welcome to <strong>A Little Scoop of Happiness</strong>, where every visit promises a delightful experience that brings joy to your taste buds and a smile to your face. Our story began with a simple idea: to create a place where people could come together to enjoy the finest gelato and ice cream, crafted with love and the highest quality ingredients. Whether you're in the mood for a classic favorite or an adventurous new flavor, we are dedicated to providing a memorable experience that makes every visit special.
      </p>
      <p>
        At <strong>A Little Scoop of Happiness</strong>, we believe that happiness can be found in the little things—like a scoop of our rich and creamy premium gelato. Our commitment to quality starts with sourcing the best ingredients from around the world. We use only the freshest fruits, the finest chocolates, and the purest dairy to ensure that every bite is a moment of pure delight. Our artisans pour their passion into every batch</p>
     
    
    
     
            </p>
            <p>Each little scoop of happiness brings you a taste of pure joy, crafted with meticulous care and the finest ingredients. Our gelato offers a smooth, velvety texture and an exceptionally rich flavor profile. Enjoy a moment of indulgence with every bite, as we bring you the best of traditional Italian methods combined with authentic, high-quality ingredients.</p>

            <div className='about-btn'>
              <a href='#' className='btn btn-smart'>READ MORE</a>
            </div>
          </div>
          <div className='col-6 p-25'>
            <div className='about-img'>
              <img src={logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
