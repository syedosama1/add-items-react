// src/redux/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  favorites: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
  },
});

export const { addToFavorites } = itemsSlice.actions;

export default itemsSlice.reducer;
