import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items added yet!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name} - Rs. {item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: Rs. {total}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
