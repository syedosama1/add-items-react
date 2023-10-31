// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../redux/itemSlice'; // Your itemsSlice

const store = configureStore({
  reducer: {
    items: itemsReducer,
    // Add more slices here if needed
  },
});

export default store;
