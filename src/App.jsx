import React from 'react';
import Navbar from './components/Navbar';
import Dishes from './components/Dishes';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './context/Context';

const App = () => {
  return (
    <div>
      <CartProvider> 
      <Navbar />
      <Outlet />
        <Dishes />
      </CartProvider>
       
    </div>
  )
}

export default App
