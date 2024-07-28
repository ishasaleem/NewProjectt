import React, { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What ingredients are used in the ice cream?", answer: "Our ice cream is made with high-quality ingredients including milk, cream, sugar, and real flavorings like vanilla beans or cocoa powder." },
    { question: "Do you offer dairy-free options?", answer: "Yes, we offer dairy-free ice cream options made with almond milk or coconut milk for those with dairy sensitivities." },
    { question: "How should I store the ice cream?", answer: "Keep the ice cream in a freezer at 0°F (-18°C) or lower to maintain its quality. Avoid leaving it out at room temperature for extended periods." },
    { question: "Can I order ice cream online?", answer: "Yes, you can order our ice cream online through our website and have it delivered to your doorstep." },
    { question: "What is the shelf life of your ice cream?", answer: "Our ice cream is best enjoyed within 6 months of purchase. Always check the expiration date on the packaging." },
    { question: "Are there any nut-free options?", answer: "We do offer nut-free options. Please check our product labels or contact us directly for more information about specific flavors." },
    { question: "Do you offer gluten-free ice cream?", answer: "Yes, we have several gluten-free ice cream options. Please review our flavor list for details or reach out to us for assistance." },
    { question: "Can I customize my ice cream order?", answer: "Currently, we do not offer customizations for ice cream orders. However, we have a wide variety of flavors to choose from!" },
    { question: "How do I become a wholesale partner?", answer: "If you're interested in becoming a wholesale partner, please contact us via our website's contact form or email us directly for more information." },
    { question: "Do you have any seasonal flavors?", answer: "Yes, we offer seasonal flavors throughout the year. Keep an eye on our website or subscribe to our newsletter for updates on new and limited-edition flavors." }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faqs'>
      <h1 className='faqs-heading'>Frequently Asked Questions</h1>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-item'>
            <div className='faq-question' onClick={() => toggleFAQ(index)}>
              <h2>{faq.question}</h2>
              <span className='faq-toggle'>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className='faq-answer'>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
