import React from 'react';

    const Promotions = () => {
      const promotions = [
        { title: "Summer Sale", description: "Enjoy 20% off all ice cream flavors. Valid until August 31st." },
        { title: "Buy One Get One Free", description: "Buy one pint of ice cream and get a second pint free. Limited time offer." },
        { title: "Free Delivery", description: "Get free delivery on orders over $50. Use code FREESHIP at checkout." },
        { title: "New Flavor Launch", description: "Try our new Raspberry Swirl flavor at 15% off. Available for a limited time." }
      ];
    
      return (
        <div className='promotion-description'>
          <h1 className='promotions-heading'>Current Promotions & Discounts</h1>
          <div className='promotions-list'>
            {promotions.map((promo, index) => (
              <div key={index} className='promotion-item'>
                <h2 className='promotion-title'>{promo.title}</h2>
                <p className='promotion-description'>{promo.description}</p>
              </div>
            ))}
          </div>
          <div className='discount-code'>
            <h2>Discount Code</h2>
            <p>Use code <strong>SCOOPS20</strong> to get 20% off your next purchase!</p>
          </div>
        </div>
      );
    };
    
    export default Promotions;
   