import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Context";
const Dishes = () => {
  const inUseContext = useContext(CartContext);

  const items = [
    {
      id: 1,
      name: "Pizza",
      image:
        "https://media.gettyimages.com/id/938742222/photo/cheesy-pepperoni-pizza.jpg?s=612x612&w=gi&k=20&c=xzn3CpUBUV5Sa1UFftWFoSz1W_mp6fEN1G4_bQlDxZU=",
      description: "Delicious cheese pizza",
      price: 12.99,
    },
    {
      id: 2,
      name: "Burger",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOX2YyS0W1LnrD5eyd-7Q9kvO1JGvE80AXXA&s",
      description: "Juicy beef burger",
      price: 8.99,
    },
    {
      id: 3,
      name: "Pasta",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGxJQNLQ_tpfDqgGfFpEARarc7qNGTDVEYg&s",
      description: "Creamy Alfredo pasta",
      price: 10.99,
    },
  ];

  const handleAddToCart = () => {
    inUseContext.setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Dishes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg shadow-lg p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-red-500 font-bold">${item.price.toFixed(2)}</p>
            <button
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
