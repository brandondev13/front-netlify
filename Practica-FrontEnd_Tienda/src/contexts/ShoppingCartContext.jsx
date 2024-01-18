// ShoppingCartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Recuperar productos almacenados en localStorage al cargar la aplicación
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const addProduct = (product) => {
    // Agregar producto al estado y actualizar localStorage
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, product];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  return (
    <CartContext.Provider value={{ cart, setCart, products, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};
