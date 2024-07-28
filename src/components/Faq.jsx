import React, { useState } from 'react';
import './Faq.css';

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <p>Welcome to Tindershion! Here you'll find answers to common questions about our platform and unique features.</p>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(0)}>What is Tindershion?</button>
          {activeIndex === 0 && (
            <div className="faq-answer">
              Tindershion is a fashion e-commerce platform that offers a unique way to shop for clothing. We combine traditional online shopping with a Tinder-like swiping feature, allowing you to swipe left to pass or right to save items you love. This makes discovering your next favorite outfit fun and engaging!
            </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(1)}>How does the swiping feature work?</button>
          {activeIndex === 1 && (
            <div className="faq-answer">
              Our swiping feature lets you quickly browse through clothing items. Simply swipe right if you like an item to add it to your favorites, or swipe left to skip. You can review your favorite items anytime and make purchases directly from your saved list.
            </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(2)}>Can I purchase items directly from the swipe interface?</button>
          {activeIndex === 2 && (
            <div className="faq-answer">
              Yes, you can! If you see something you like while swiping, just swipe right to add it to your favorites. From there, you can view the item details and proceed to checkout to make a purchase.
            </div>
          )}
        </div>
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(3)}>Do you offer returns or exchanges?</button>
          {activeIndex === 3 && (
            <div className="faq-answer">
              Absolutely! We want you to be completely satisfied with your purchase. If you're not happy with an item, you can return or exchange it within 30 days of receiving your order. Please refer to our return policy for more details.
            </div>
          )}
        </div>
        <div className="contact">
          <p>Still have questions?</p>
          <a href='/contact' className="contact-button">Get in touch</a>
        </div>
      </div>
    </div>
  );
}

export default Faq;
