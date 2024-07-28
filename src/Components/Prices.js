import React from 'react';
import logo from './scooop.jpg';
import Vanilla from './VanillaBean.jpg';
import Chocolate from './Chocolate.avif';
import Strawberry from './strawberry.webp';
import Mint from './mint.jfif';
import Strawbery from './Strawbery.jpg';
import Cookies from './cookies.webp';

const Prices = () => {
  return (
    <div className='prices'>
      <h1 className='prices-heading'>Prices of Products</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className='price'>
              <div className='price-img'>
                <img src={Vanilla} alt="Vanilla Ice Cream" />
              </div>
              <h1 className='price-heading'>Vanilla Ice Cream</h1>
              <p className='price-content'>
                Vanilla ice cream is a classic favorite made with real vanilla beans for a rich and creamy flavor.
              </p>
              <p className='price-rs'>$58.00</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='price'>
              <div className='price-img'>
                <img src={Chocolate} alt="Chocolate Ice Cream" />
              </div>
              <h1 className='price-heading'>Chocolate Ice Cream</h1>
              <p className='price-content'>
                Indulge in our decadent chocolate ice cream, crafted with the finest cocoa for a deep, rich taste.
              </p>
              <p className='price-rs'>$53.00</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='price'>
              <div className='price-img'>
                <img src={Strawbery} alt="Strawberry Ice Cream" />
              </div>
              <h1 className='price-heading'>Strawberry Ice Cream</h1>
              <p className='price-content'>
                Enjoy the sweet and tangy flavor of fresh strawberries in every bite of our delightful strawberry ice cream.
              </p>
              <p className='price-rs'>$57.00</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='price'>
              <div className='price-img'>
                <img src={Mint} alt="Mint Ice Cream" />
              </div>
              <h1 className='price-heading'>Mint Ice Cream</h1>
              <p className='price-content'>
                Refreshing and cool, our mint ice cream is infused with natural mint extract and dotted with chocolate chips.
              </p>
              <p className='price-rs'>$45.00</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='price'>
              <div className='price-img'>
                <img src={Cookies} alt="Cookies Ice Cream" />
              </div>
              <h1 className='price-heading'>Cookies Ice Cream</h1>
              <p className='price-content'>
                Our cookies ice cream features chunks of your favorite cookies in a creamy vanilla base, perfect for cookie lovers.
              </p>
              <p className='price-rs'>$25.00</p>
            </div>
          </div>
          <div className='col-4'>
            <div className='price'>
              <div className='price-img'>
                <img src={logo} alt="Logo" />
              </div>
              <h1 className='price-heading'>Pistachio Scoops</h1>
              <p className='price-content'>
                Pistachio ice cream is a creamy, indulgent treat made from a base of milk, cream, and sugar, enriched with cocoa powder or melted chocolate.
              </p>
              <p className='price-rs'>$54.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
