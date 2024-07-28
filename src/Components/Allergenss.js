import React from 'react';

const Allergenss = () => {
  return (
    <div>
      <section id="allergens" className="allergens-section">
        <h2 className="allergens-title">Allergens Information</h2>
        <p className="allergens-text">Your safety is of utmost importance to us. Here’s how we handle allergens in our products:</p>
        <ul className="allergens-list">
          <li className="allergens-item">
            <strong>Clear Labeling:</strong> All our products are clearly labeled with detailed ingredient lists and allergen warnings. Please check these labels carefully if you have food allergies. We believe that clear labeling is essential for making informed choices and ensuring safety.
          </li>
          <li className="allergens-item">
            <strong>Dedicated Equipment:</strong> We use dedicated equipment for different types of gelato to minimize the risk of cross-contamination. Our kitchen is equipped with separate tools and machinery for processing different ingredients, ensuring that allergens are contained and managed properly.
          </li>
          <li className="allergens-item">
            <strong>Staff Training:</strong> Our staff are trained to handle allergens responsibly and can provide detailed information about our ingredients and processes. Continuous training ensures that our team is knowledgeable about allergen management and committed to maintaining a safe environment.
          </li>
          <li className="allergens-item">
            <strong>Allergen-Free Options:</strong> We offer a selection of gelato flavors that are free from common allergens, including dairy-free, nut-free, and gluten-free options. These alternatives ensure that everyone can enjoy our gelato, regardless of dietary restrictions or allergies.
          </li>
        </ul>
        <p className="allergens-text">We take every precaution to ensure that our gelato is safe for all our customers. If you have any specific concerns or requirements, please do not hesitate to reach out to our staff, who are always happy to assist you.</p>
      </section>
    </div>
  );
}

export default Allergenss;
