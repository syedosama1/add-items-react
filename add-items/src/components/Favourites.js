// src/components/Favorites.js
import React from "react";
import { useSelector } from "react-redux";
import "./Favourites.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.items.favorites);
  const navigate = useNavigate(); // Create a navigation function

  const goBackToHome = () => {
    navigate("/"); // Navigate to the Home page
  };

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
      <div>
        <button onClick={goBackToHome}>Go back to Home</button>
        {/* Add this button to navigate back to Home */}
      </div>
    </div>
  );
};

export default Favorites;
