import { useState, useEffect } from 'react';

import './App.css';
import Header from './Header';
import ShoppingCart from './ShoppingCart';

function App() {
  const [cart, setCart] = useState([
    { name: "Samsung Galaxy S8", price: 399.99, count: 1 },
    { name: "Google Pixel", price: 499.99, count: 1 },
    { name: "Xiaomi Redmi Note 2", price: 699.99, count: 1 },
    { name: "Samsung Galaxy S7", price: 599.99, count: 1 }
  ]);
  
  const [total, setTotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    calculateTotal();
    calculateTotalCount();
  }, [cart]);

  const calculateTotal = () => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.count, 0);
    setTotal(newTotal);
  };

  const calculateTotalCount = () => {
    const newTotalCount = cart.reduce((sum, item) => sum + item.count, 0);
    setTotalCount(newTotalCount);
  };

  const increment = (index) => {
    const newCart = [...cart];
    newCart[index].count++;
    setCart(newCart);
  };

  const decrement = (index) => {
    const newCart = [...cart];
    if (newCart[index].count > 1) {
      newCart[index].count--;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    setTotalCount(0);
  };

  return (
    <>
      <Header totalCount={totalCount} />
      <ShoppingCart 
        cart={cart} 
        increment={increment} 
        decrement={decrement} 
        clearCart={clearCart} 
        total={total} 
      />
    </>
  );
}

export default App;
