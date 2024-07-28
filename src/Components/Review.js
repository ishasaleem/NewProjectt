import React from 'react';

const Review = () => {
  return (
    <div>
      <div className="reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <p>★★★★★</p>
          <p>“Delicious and refreshing! One of my favorites.” - Jane Doe</p>
        </div>
        <div className="review">
          <p>★★★★☆</p>
          <p>“Great flavors and creamy texture. Will buy again!” - John Smith</p>
        </div>
        <div className="review">
          <p>★★★★★</p>
          <p>“Absolutely the best ice cream I've ever had!” - Emily Johnson</p>
        </div>
        <div className="review">
          <p>★★★★☆</p>
          <p>“Loved the variety of flavors. The chocolate is to die for.” - Michael Brown</p>
        </div>
        <div className="review">
          <p>★★★★★</p>
          <p>“The strawberry ice cream is a must-try. So fresh and tasty!” - Sarah Wilson</p>
        </div>
        <div className="review">
          <p>★★★★☆</p>
          <p>“Great customer service and amazing ice cream.” - Chris Lee</p>
        </div>
        <button>Write a Review</button>
      </div>
    </div>
  );
};

export default Review;
