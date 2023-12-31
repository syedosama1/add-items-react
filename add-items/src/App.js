import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, } from "react-router-dom"; // Import the new routing components
import store from "./redux/store";
import Home from "./components/Home";
import Favourites from "./components/Favourites";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourites />} />
      </Routes>
    </Provider>
  );
}

export default App;
