import React from 'react';
import './ShoppingCart.css';
import phone1 from './assets/phone1.jpg'

function ShoppingCart({ cart, increment, decrement, clearCart, total }) {
  return (
    <div className="shopping-cart">
      <h1 className="bag-title">YOUR BAG</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={item.name}>
            <div className="item-details">
              <img src={phone1} alt={item.name} />
              <div>
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price}</span>
                <a href="#" className="remove-link" onClick={() => decrement(index)}>remove</a>
              </div>
            </div>
            <div className="item-controls">
              <button onClick={() => decrement(index)}>⬇️</button>
              <span>{item.count}</span>
              <button onClick={() => increment(index)}>⬆️</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <p>Total</p>
        <p className="total-amount">${total.toFixed(2)}</p>
      </div>
      <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default ShoppingCart;
