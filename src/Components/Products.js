import React from 'react';
import Vanilla from './VanillaBean.jpg';
import Chocolate from './Chocolate.avif';
import Strawberry from './strawberry.webp';
import Mint from './mint.jfif';
import Cookies from './cookies.webp';

const Products = () => {
  return (
    <div className="product-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1><strong>Popular Flavors of A Little Scoop of Happiness</strong></h1>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <div className="product-item">
          <img src={Vanilla} alt="Vanilla Ice Cream" />
          <p><strong>Vanilla Ice Cream</strong></p>
          <p>A classic favorite, our rich and creamy vanilla ice cream is made with real vanilla beans for a flavor that's both simple and elegant.</p>
        </div>
        <div className="product-item">
          <img src={Chocolate} alt="Chocolate Ice Cream" />
          <p><strong>Chocolate Ice Cream</strong></p>
          <p>Indulge in our decadent chocolate ice cream, crafted with the finest cocoa for a deep, rich chocolate taste.</p>
        </div>
        <div className="product-item">
          <img src={Strawberry} alt="Strawberry Ice Cream" />
          <p><strong>Strawberry Ice Cream</strong></p>
          <p>Enjoy the sweet and tangy flavor of fresh strawberries in every bite of our delightful strawberry ice cream.</p>
        </div>
        <div className="product-item">
          <img src={Mint} alt="Mint Ice Cream" />
          <p><strong>Mint Ice Cream</strong></p>
          <p>Refreshing and cool, our mint ice cream is infused with natural mint extract and dotted with chocolate chips.</p>
        </div>
        <div className="product-item">
          <img src={Cookies} alt="Cookies Ice Cream" />
          <p><strong>Cookies Ice Cream</strong></p>
          <p>Our cookies ice cream features chunks of your favorite cookies in a creamy vanilla base, perfect for cookie lovers.</p>
        </div>
      </div>
</div>
  );
};

export default Products;
