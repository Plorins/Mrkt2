import React from 'react';

function Cart({ cart, onCheckout, checkoutComplete }) {
  // Calculate total price of all items in cart
  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  // Format price to 2 decimal places
  const formattedTotalPrice = totalPrice.toFixed(2);

  // If checkout is complete, show a success message
  if (checkoutComplete) {
    return (
      <div className="checkout-complete flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
        <p className="text-lg">Your order has been processed successfully.</p>
      </div>
    );
  }

  // If cart is empty, show a message
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some items to your cart to get started!</p>
      </div>
    );
  }

  // Otherwise, show the cart items and checkout button
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-image">
              {item.image ? (
                <img src={item.image} alt={item.name} />
              ) : (
                <div className="cart-item-placeholder">{item.name.charAt(0)}</div>
              )}
            </div>
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p className="cart-item-price">${item.price} × {item.quantity}</p>
              <p className="cart-item-subtotal">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total flex justify-between items-center mb-4">
          <span>Total:</span>
          <span>${formattedTotalPrice}</span>
        </div>
        <div className="w-full text-right">
          <button className="checkout-button bg-blue-500 text-white px-4 py-2 rounded ml-auto" onClick={onCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
