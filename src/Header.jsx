import React from 'react';
import './Header.css';

import cart from './assets/cart.png'
function Header({ totalCount }) {
  return (
    <div className="header">
      <span className="header-title">UseReducer</span>
      <div className="cart-icon">
        <span className="cart-count">{totalCount}</span>
        <img src={cart} alt="Cart" />
      </div>
    </div>
  );
}

export default Header;
