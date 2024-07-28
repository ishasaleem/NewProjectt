
import React from 'react';

const Desserts = () => {
  return (
    <div className="desserts-container">
      <section id="desserts" className="unique-desserts">
        <h2>Desserts</h2>
        <ul>
          <li>Brownies</li>
          <li>Cakes</li>
          <li>Cookies</li>
          <li>Pie</li>
          <li>Donuts</li>
          <li>Macarons</li>
          <li>Cheesecake</li>
          <li>Churros</li>
          <li>Crêpes</li>
          <li>Fruit Tart</li>
          {/* Add more desserts as needed */}
        </ul>
      </section>
    </div>
  )
}

export default Desserts;
