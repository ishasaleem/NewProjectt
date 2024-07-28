
import React from 'react';


const Cmenu = () => {
  return (
    <div className="menu">
      <header className="class1">
        <nav>
          <ul>
            <li><a href="#flavors">Ice Cream Flavors</a></li>
            <li><a href="#toppings">Toppings & Add-Ons</a></li>
            <li><a href="#drinks">Drinks</a></li>
            <li><a href="#desserts">Desserts</a></li>
            <li><a href="#combos">Combos & Deals</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="flavors" className="class2">
          <h2>Ice Cream Flavors</h2>
          <ul>
            <li>Vanilla Bean</li>
            <li>Chocolate Fudge</li>
            <li>Strawberry Swirl</li>
            <li>Cookies and Cream</li>
            <li>Mango Tango</li>
            <li>Matcha Green Tea</li>
            <li>Salted Caramel</li>
            <li>Pistachio</li>
            <li>Mint Chocolate Chip</li>
            <li>Peanut Butter Cup</li>
            <li>Brownie Batter</li>
            <li>White Chocolate Raspberry</li>
            <li>Blueberry Cheesecake</li>
            <li>Rocky Road</li>
            <li>Butter Pecan</li>
            <li>Neapolitan</li>
        
          </ul>
        </section>

   </main>
    </div>
  );
}

export default Cmenu;
