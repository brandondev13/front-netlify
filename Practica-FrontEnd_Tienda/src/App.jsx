// App.jsx
import React from "react";
import ItemList from "./components/ItemList";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import Login from "./components/Login";
import AddProduct from "./components/AddProduct";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};
