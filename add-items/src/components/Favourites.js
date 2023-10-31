// src/components/Favorites.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Favorites.css'; // Import the CSS file for styling

const Favorites = () => {
  const favorites = useSelector((state) => state.items.favorites);

  return (
    <div>
      <h2>Your Favorite Items</h2>
      <div className="favorites-container">
        {favorites.map((item) => (
          <div key={item.id} className="favorite-item">
            <h3>{item.name}</h3>
            <button>Delete from Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
