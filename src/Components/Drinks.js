
import React from 'react';

const Drinks = () => {
  return (
    <div className="drinks-container">
      <section id="drinks" className="unique-drinks">
        <h2>Drinks</h2>
        <ul>
          <li>Soda</li>
          <li>Milkshakes</li>
          <li>Soft Drinks</li>
          <li>Iced Coffee</li>
          <li>Hot Chocolate</li>
          <li>Lemonade</li>
          <li>Iced Tea</li>
          <li>Fruit Smoothies</li>
          <li>Water</li>
          {/* Add more drinks as needed */}
        </ul>
      </section>
    </div>
  )
}

export default Drinks;
