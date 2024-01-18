// ItemList.jsx
import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/products/all");
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Error al cargar productos");
        }
      } catch (error) {
        console.error("Error de red", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="items-list">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
