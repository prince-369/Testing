import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/Context'
const Cart = () => {

  const inUseContext = useContext(CartContext)

  return (
    <div>
      <h1>Cart</h1>

      {inUseContext.cartItems.length === 0 ? inUseContext.cartItems.map((item) => (
        <div key={item.id} className="border rounded-lg shadow-lg p-4">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-red-500 font-bold">${item.price.toFixed(2)}</p>
        </div>
      )) : <p>Your cart is empty</p>}
    </div>
  )
}

export default Cart
