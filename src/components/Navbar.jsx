import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Side - Logo & Links */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-red-500">PuchuHub</h1>
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-lg ${isActive ? 'text-red-500 font-bold' : 'text-white'}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/order" 
            className={({isActive}) => 
              `text-lg ${isActive ? 'text-red-500 font-bold' : 'text-white'}`
            }
          >
            Order
          </NavLink>
        </div>

        {/* Right Side - Search & Cart */}
        <div className="flex items-center space-x-4">
        <input 
  type="text" 
  placeholder="Search Your Fav Food..." 
  className="px-4 py-2 rounded-md outline-none bg-white text-black placeholder-black"
 />

<NavLink 
  to="cart" 
  className={({isActive}) => 
    `text-2xl ${isActive ? 'text-red-500 font-bold' : 'text-white'}`
  }
>
  <FaShoppingCart />
</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
