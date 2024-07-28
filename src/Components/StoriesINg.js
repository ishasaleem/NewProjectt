import React from 'react';

const StoriesINg = () => {
  return (
    <div>
      <section id="ingredient-stories-section" className="ingredient-stories-section">
        <h2 className="ingredient-stories-heading">Ingredient Stories</h2>
        <p className="ingredient-stories-intro">Every ingredient in our gelato has a unique story. Here are a few of our favorites:</p>
        <ul className="ingredient-stories-list">
          <li className="ingredient-story-item">
            <strong>Madagascar Vanilla Beans:</strong> Grown in the lush rainforests of Madagascar, our vanilla beans are harvested by hand and sun-cured over several months. The result is a rich, aromatic vanilla that adds depth and complexity to our gelato. These beans are grown by smallholder farmers who use traditional methods passed down through generations.
          </li>
          <li className="ingredient-story-item">
            <strong>Belgian Chocolate:</strong> Our chocolate comes from a family-owned chocolatier in Belgium, where traditional methods are used to create smooth, velvety chocolate with a deep, intense flavor. The cocoa beans are sourced from sustainable plantations in West Africa, ensuring both quality and ethical production.
          </li>
          <li className="ingredient-story-item">
            <strong>Local Strawberries:</strong> We source our strawberries from a nearby family farm that practices organic farming. These strawberries are picked at the peak of ripeness and delivered to our kitchen within hours, ensuring maximum freshness and flavor. The farm uses sustainable farming techniques, preserving the environment and producing superior-quality fruit.
          </li>
          <li className="ingredient-story-item">
            <strong>Organic Milk:</strong> Our milk comes from a cooperative of organic dairy farms. The cows are pasture-raised and fed a natural diet, resulting in milk that is both delicious and nutritious. The cooperative supports small-scale farmers and promotes sustainable agricultural practices.
          </li>
          <li className="ingredient-story-item">
            <strong>Pure Cane Sugar:</strong> Our cane sugar is sourced from sustainable plantations in South America. It is minimally processed to retain its natural flavor and sweetness. The sugarcane is grown using eco-friendly farming methods, reducing environmental impact and supporting local communities.
          </li>
        </ul>
        <p className="ingredient-stories-conclusion">Each ingredient's story reflects our commitment to quality, sustainability, and ethical sourcing. By sharing these stories, we hope to connect our customers with the journey of our ingredients from farm to scoop. We believe that knowing the origins of our ingredients enhances the enjoyment of our gelato and fosters a deeper appreciation for the care and effort that goes into each batch.</p>
      </section>
    </div>
  );
}

export default StoriesINg;
