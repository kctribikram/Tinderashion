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
              Tindershion is a fashion e-commerce platform that combines online shopping with a fun, interactive swiping feature. Swipe right to save items you love and left to skip. Discover new styles and make shopping an enjoyable experience!
            </div>
          )}
        </div>
        
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(1)}>How does the swiping feature work?</button>
          {activeIndex === 1 && (
            <div className="faq-answer">
              Our swiping feature allows you to quickly browse through clothing items. Swipe right if you like an item to add it to your favorites, or swipe left to pass. You can view and purchase your favorite items anytime.
            </div>
          )}
        </div>
        
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(2)}>Can I purchase items directly from the swipe interface?</button>
          {activeIndex === 2 && (
            <div className="faq-answer">
              Yes, you can! After swiping right on an item, it gets added to your favorites list. You can review your favorites, view detailed descriptions, and proceed to checkout from there.
            </div>
          )}
        </div>
        
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(3)}>Do you offer returns or exchanges?</button>
          {activeIndex === 3 && (
            <div className="faq-answer">
              Absolutely! If you're not satisfied with your purchase, you can return or exchange it within 30 days of receiving your order. Please visit our return policy page for detailed information.
            </div>
          )}
        </div>
        
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(4)}>What payment methods do you accept?</button>
          {activeIndex === 4 && (
            <div className="faq-answer">
              We accept major credit and debit cards, PayPal, and Apple Pay. All transactions are secured with industry-standard encryption to protect your information.
            </div>
          )}
        </div>
        
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(5)}>Is there a mobile app available for Tindershion?</button>
          {activeIndex === 5 && (
            <div className="faq-answer">
              Yes, Tindershion is available as a mobile app on both iOS and Android. Download our app to enjoy seamless shopping and exclusive app-only features.
            </div>
          )}
        </div>
        
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(6)}>How can I track my order?</button>
          {activeIndex === 6 && (
            <div className="faq-answer">
              Once your order is shipped, we will send you a confirmation email with a tracking number. You can use this number to track your order status on our website or through the courier’s tracking portal.
            </div>
          )}
        </div>
        
        <div className="faq-item">
          <button className="faq-question" onClick={() => toggleAnswer(7)}>Do you offer customer support?</button>
          {activeIndex === 7 && (
            <div className="faq-answer">
              Yes, our customer support team is here to help! You can reach out to us via email or through the contact form on our website. We strive to respond to all inquiries within 24 hours.
            </div>
          )}
        </div>
        
        <div className="contact">
          <p>Still have questions?</p>
          <button className="contact-button">Get in touch</button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
