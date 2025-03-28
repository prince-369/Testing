import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  <CartContext.Provider value={{ cartItems, setCartItems }}>
    {children}
  </CartContext.Provider>;
};
