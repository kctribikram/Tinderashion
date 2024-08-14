import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import './Checkout.css';

const Checkout = ({ cart = [] }) => {
  const [deliveryMethod, setDeliveryMethod] = useState('ship');
  const [addressType, setAddressType] = useState('homeoffice');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone Number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted', formData);
      navigate('/success'); // Navigate to the success page after form submission
    } else {
      console.log('Form validation failed');
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const calculateTax = () => {
    const subtotal = parseFloat(calculateSubtotal());
    return (subtotal * 0.13).toFixed(2); // Calculate 13% of the subtotal
  };

  const estimatedShipping = 0.00;
  const estimatedTax = parseFloat(calculateTax());
  const total = (parseFloat(calculateSubtotal()) + estimatedShipping + estimatedTax).toFixed(2);

  // Calculate arrival date 5 days from today
  const arrivalDate = new Date();
  arrivalDate.setDate(arrivalDate.getDate() + 5);
  const arrivalDateString = arrivalDate.toLocaleDateString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h2 className="checkout-title">Checkout</h2>

        <div className="checkout-content">
          <form className="delivery-options" onSubmit={handleSubmit}>
            <h3 className="section-title">Delivery Options</h3>
            <div className="delivery-methods">
              <button
                type="button"
                className={`method-btn ${deliveryMethod === 'ship' ? 'active' : ''}`}
                onClick={() => setDeliveryMethod('ship')}
              >
                Ship
              </button>
              <button
                type="button"
                className={`method-btn ${deliveryMethod === 'pickup' ? 'active' : ''}`}
                onClick={() => setDeliveryMethod('pickup')}
              >
                Pick Up
              </button>
            </div>

            <div className="address-type">
              <button
                type="button"
                className={`address-btn ${addressType === 'homeoffice' ? 'active' : ''}`}
                onClick={() => setAddressType('homeoffice')}
              >
                Home/Office
              </button>
              <button
                type="button"
                className={`address-btn ${addressType === 'apo' ? 'active' : ''}`}
                onClick={() => setAddressType('apo')}
              >
                APO/FPO
              </button>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input-field half-width"
                />
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input-field half-width"
                />
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper full-width">
                <input
                  type="text"
                  name="address"
                  placeholder="Start typing address"
                  value={formData.address}
                  onChange={handleChange}
                  className="input-field full-width"
                />
                {errors.address && <span className="error-text">{errors.address}</span>}
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field half-width"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
              <div className="input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field half-width"
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>
            </div>

            <button type="submit" className="save-continue-btn">Save & Continue</button>
          </form>

          <div className="order-summary">
            <h3 className="section-title">In Your Bag</h3>
            <div className="order-details">
              <p>Subtotal: ${calculateSubtotal()}</p>
              <p>Estimated Shipping: ${estimatedShipping.toFixed(2)}</p>
              <p>Estimated Tax: ${estimatedTax.toFixed(2)}</p>
              <p>Total: ${total}</p>
              <p className="delivery-date">Arrives by {arrivalDateString}</p>
            </div>

            <div className="bag-items">
              {cart && cart.length > 0 ? (
                cart.map(item => (
                  <div key={item.id} className="bag-item">
                    <img src={item.image} alt={item.name} className="bag-item-image" />
                    <div className="bag-item-details">
                      <p className="bag-item-name">{item.name}</p>
                      <p className="bag-item-style">Style #: {item.styleNumber}</p>
                      <p className="bag-item-size">Size: {item.size}</p>
                      <p className="bag-item-color">Color: {item.color}</p>
                      <p className="bag-item-quantity">Qty: {item.quantity} @ ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your bag is empty.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
