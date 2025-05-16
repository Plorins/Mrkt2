import React from 'react';

function Cart({ cart, checkoutComplete, handleCheckout }) {
  if (checkoutComplete) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h2>Thank you for your purchase!</h2>
          <p>Your order has been successfully processed.</p>
        </div>
      </div>
    );
  }
  
  if (cart.length === 0) {
    return <div className="empty-cart">Your cart is empty</div>;
  }
  
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-image">
              {item.image ? 
                <img src={item.image} alt={item.name} /> : 
                <div className="cart-item-placeholder">{item.name.charAt(0)}</div>
              }
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price} × {item.quantity}</p>
            </div>
            <div className="cart-item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</h3>
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;