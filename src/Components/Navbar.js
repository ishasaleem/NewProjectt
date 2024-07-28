import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-text'>
        
        <ul className='navbar-url'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about_us">About</Link></li>
          <li><Link to="/Menuu">Menu</Link></li>
          <li><Link to="/ProductPage">Products</Link></li>
          <li><Link to="/Terms">Terms&Conditions</Link></li>
          <li><Link to="/Ourpages">Story</Link></li>
          <li><Link to="/ContactUS">Contact Us</Link></li>
          <li><Link to="/Flavor">Flavors</Link></li>
      
          <li><Link to="/Ingredients">Ingredients</Link></li>
          <li><Link to="/Events">Events</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
