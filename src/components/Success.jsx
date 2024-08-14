import React from 'react';
import './Success.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Success = () => {
  const handleContinueShopping = () => {
    window.location.href = '/';
  };

  const handleViewOrder = () => {
    window.location.href = '/checkout';
  };

  return (
    <div className="success-page">
      <div className="success-container">
        <div className="success-icon">
          <i className="fas fa-check"></i>
        </div>
        <h1>Thank you for ordering!</h1>
        <p>Your order has been successfully placed. You will receive an email confirmation shortly.</p>
        <div className="success-buttons">
          <button className="view-order-btn" onClick={handleViewOrder}>View Order</button>
          <button className="continue-shopping-btn" onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Success;
