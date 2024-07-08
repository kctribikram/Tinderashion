import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    calculateTotal();
  };

  const updateQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
    calculateTotal();
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Size: {item.size.join(', ')}</p>
                <p>Colors: {item.color.join(', ')}</p>
                <div className="quantity">
                  <label htmlFor={`quantity-${index}`}>Quantity:</label>
                  <input
                    id={`quantity-${index}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                  />
                </div>
                <button onClick={() => removeItem(index)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <div className="cart-total">
        <h2>Total: ${total.toFixed(2)}</h2>
        <button className="checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
