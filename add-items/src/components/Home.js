import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../redux/itemSlice';
import {  useNavigate } from 'react-router-dom'; // Import Link for navigation
import './Home.css';

const Home = () => {
  const [newItem, setNewItem] = useState('');
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
const navigate = useNavigate()
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      const newItemObject = {
        id: Date.now(),
        name: newItem,
      };

      dispatch(addToFavorites(newItemObject));
      setNewItem('');
    }
  };

  const goBackToHome = () => {
    navigate("/favourite"); // Navigate to the Home page
  };
  return (
    <div className="home-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter item name"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      <div className="items-container">
        {items.map((item) => (
          <div key={item.id} className="item">
            <h3>{item.name}</h3>
            <button onClick={() => dispatch(addToFavorites(item))}>Add to Favorites</button>
          </div>
        ))}
      </div>
      <button onClick={goBackToHome}>Favourite-List</button>

    </div>
  );
};

export default Home;
